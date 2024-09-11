import NextAuth from "next-auth";

import authConfig from "@/auth.config";

import { NextResponse } from "next/server";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  adminProtectedRoute,
  authRoutes,
  ADMIN_LOGIN_ROUTE,
  userAdminProctedRoutes,
} from "@/routes";
import { getToken } from "next-auth/jwt";

const secret = process.env.AUTH_SECRET;

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  // @ts-ignore
  const token = await getToken({ req, secret });
  const userRole = token?.role;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAuthProtectedRoute = adminProtectedRoute.includes(nextUrl.pathname);
  const isUserAdminProtectedRoute = userAdminProctedRoutes.includes(
    nextUrl.pathname
  );

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      let redirectUrl;

      switch (userRole) {
        case "SUPERADMIN":
          redirectUrl = ADMIN_LOGIN_ROUTE;
          break;
        default:
          redirectUrl = DEFAULT_LOGIN_REDIRECT;
      }

      return Response.redirect(new URL(redirectUrl, nextUrl));
    }
    return;
  }

  // Route protection for both USER and ADMIN
  if (isUserAdminProtectedRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect to sign-in if not logged in
    }

    if (userRole === "ADMIN" || userRole === "USER") {
      return NextResponse.next(); // Allow if user is ADMIN or USER
    }

    // Redirect SUPERADMIN to their own dashboard
    return NextResponse.redirect(new URL(ADMIN_LOGIN_ROUTE, nextUrl));
  }

  // Admin Route Protection (e.g., only SuperAdmin can access)
  if (isAuthProtectedRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect to sign-in if not logged in
    }

    if (userRole === "SUPERADMIN") {
      return NextResponse.next(); // Allow access to SuperAdmin routes
    }

    // Redirect USER and ADMIN to their shared dashboard
    let redirectUrl = DEFAULT_LOGIN_REDIRECT;
    return NextResponse.redirect(new URL(redirectUrl, nextUrl));
  }
  if (isAuthProtectedRoute) {
    if (isLoggedIn) {
      return;
    }

    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// export { auth as middleware } from "@/auth";
