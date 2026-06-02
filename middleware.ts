import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Only imports auth.config.ts — no bcryptjs or Supabase, Edge-compatible.
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
