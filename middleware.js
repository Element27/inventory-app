// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // Define protected routes
  const protectedRoutes = ['/home', '/dashboard/*', '/inventory/*']; // Add your protected routes here

  // Check if the requested path is a protected route
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

  if (isProtectedRoute) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      url.searchParams.set('callbackUrl', req.nextUrl.pathname); // Add the original path as a query parameter
      return NextResponse.redirect(url);
    }
  }

  // Allow the request to continue if the user is authenticated or the route is not protected
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder (static assets)
     * - auth routes (e.g., /auth/login, /auth/signup)
     */
    '/((?!_next/static|_next/image|favicon.ico|auth/).*)',
  ],
};