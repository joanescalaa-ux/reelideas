import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { authConfig, sessionCookie } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  trustHost: true,
  session: { strategy: 'jwt' },
  cookies: {
    sessionToken: sessionCookie,
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        console.log('[auth] authorize called — email:', credentials?.email, '| password present:', !!credentials?.password);

        if (!credentials?.email || !credentials?.password) {
          console.log('[auth] missing credentials, returning null');
          return null;
        }

        const email = (credentials.email as string).toLowerCase().trim();

        const { getSupabase } = await import('@/lib/supabase');
        const supabase = getSupabase();

        const { data: user, error } = await supabase
          .from('reel_users')
          .select('id, email, password_hash, nombre')
          .eq('email', email)
          .single();

        console.log('[auth] Supabase query — found:', !!user, '| error:', error?.message ?? 'none', '| hash prefix:', user?.password_hash?.slice(0, 10) ?? 'n/a');

        if (!user) return null;

        const valid = await compare(credentials.password as string, user.password_hash as string);
        console.log('[auth] bcrypt.compare result:', valid);

        if (!valid) return null;

        return {
          id: user.id as string,
          email: user.email as string,
          name: (user.nombre as string) || null,
        };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    jwt({ token, user }) {
      if (user?.id) token.sub = user.id;
      return token;
    },
    session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
  },
});
