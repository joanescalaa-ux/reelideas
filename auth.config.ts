import type { NextAuthConfig } from 'next-auth';

const isProd = process.env.NODE_ENV === 'production';

export const sessionCookie = {
  name: isProd ? '__Secure-authjs.session-token' : 'authjs.session-token',
  options: {
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
    secure: isProd,
  },
};

export const authConfig = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' as const },
  pages: { signIn: '/login' },
  providers: [],
  cookies: {
    sessionToken: sessionCookie,
  },
} satisfies NextAuthConfig;

export default authConfig;
