import { auth } from './auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isLoginPage = req.nextUrl.pathname === '/login';
  const isRegisterPage = req.nextUrl.pathname === '/register';

  if (!isLoggedIn && !isLoginPage && !isRegisterPage) {
    return Response.redirect(new URL('/login', req.nextUrl));
  }

  if (isLoggedIn && (isLoginPage || isRegisterPage)) {
    return Response.redirect(new URL('/', req.nextUrl));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|_next/data).*)'],
};
