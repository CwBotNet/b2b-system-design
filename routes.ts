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

export const authRoutes = ["/sign-in", "/sign-up"];

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
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
