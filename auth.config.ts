import type { NextAuthConfig } from 'next-auth';

const isProd = process.env.NODE_ENV === 'production';

// Shared cookie config — must be identical in auth.ts and here so the
// middleware can read the same cookie that the login flow sets.
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
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      console.log(`[middleware] ${pathname} — isLoggedIn: ${isLoggedIn} | user: ${auth?.user?.email ?? 'none'}`);

      const isAuthPage = pathname === '/login' || pathname === '/register';

      if (isLoggedIn && isAuthPage) {
        console.log('[middleware] logged in user on auth page → redirect /');
        return Response.redirect(new URL('/', nextUrl));
      }
      if (!isLoggedIn && !isAuthPage) {
        console.log('[middleware] not logged in, protected route → redirect /login');
        return Response.redirect(new URL('/login', nextUrl));
      }

      console.log('[middleware] access granted');
      return true;
    },
  },
} satisfies NextAuthConfig;
