import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' as const },
  pages: { signIn: '/login' },
  providers: [],
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
