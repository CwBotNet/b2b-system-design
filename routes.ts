/**
 * An array of routes that are accessible to public
 * These routes do not require authencation
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authencation
 * These routes will redirect logged in user to /dashboard
 * @type {string[]}
 */

export const authRoutes = ["/sign-in", "/sign-up", "/new-verification"];

/**
 * The prefix for API authencation routes
 * Routes that start with this prefix are used for API
 authencation purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/user/admin/dashboard";

export const ADMIN_LOGIN_ROUTE = "/admin/dashboard";

export const userAdminProctedRoutes = [
  "/user/admin/dashboard",
  "/user/admin/dashboard/company",
  "/user/admin/dashboard/product",
  "/user/admin/dashboard/setting",
];

export const adminProtectedRoute = [
  "/admin/dashboard",
  "/admin/dashboard/companys",
  "/admin/dashboard/members",
  "/admin/dashboard/products",
  "/admin/dashboard/transaction",
  "/admin/dashboard/setting",
];
