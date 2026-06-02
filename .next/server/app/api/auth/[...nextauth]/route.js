/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Joan_Cresp_reel_ideas_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Joan Crespí\\\\reel-ideas\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Joan_Cresp_reel_ideas_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNKb2FuJTIwQ3Jlc3AlQzMlQUQlNUNyZWVsLWlkZWFzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNKb2FuJTIwQ3Jlc3AlQzMlQUQlNUNyZWVsLWlkZWFzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSm9hbiBDcmVzcMOtXFxcXHJlZWwtaWRlYXNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcSm9hbiBDcmVzcMOtXFxcXHJlZWwtaWRlYXNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(rsc)/./auth.ts\");\n\nconst { GET, POST } = _auth__WEBPACK_IMPORTED_MODULE_0__.handlers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFM0IsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxHQUFHRiwyQ0FBUUEsQ0FBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxKb2FuIENyZXNww61cXHJlZWwtaWRlYXNcXGFwcFxcYXBpXFxhdXRoXFxbLi4ubmV4dGF1dGhdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gJ0AvYXV0aCc7XG5cbmV4cG9ydCBjb25zdCB7IEdFVCwgUE9TVCB9ID0gaGFuZGxlcnM7XG4iXSwibmFtZXMiOlsiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: 'jwt'\n    },\n    pages: {\n        signIn: '/login'\n    },\n    providers: [],\n    callbacks: {\n        authorized ({ auth, request: { nextUrl } }) {\n            const isLoggedIn = !!auth?.user;\n            const pathname = nextUrl.pathname;\n            console.log(`[middleware] ${pathname} — isLoggedIn: ${isLoggedIn} | user: ${auth?.user?.email ?? 'none'}`);\n            const isAuthPage = pathname === '/login' || pathname === '/register';\n            if (isLoggedIn && isAuthPage) {\n                console.log('[middleware] logged in user on auth page → redirect /');\n                return Response.redirect(new URL('/', nextUrl));\n            }\n            if (!isLoggedIn && !isAuthPage) {\n                console.log('[middleware] not logged in, protected route → redirect /login');\n                return Response.redirect(new URL('/login', nextUrl));\n            }\n            console.log('[middleware] access granted');\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsYUFBYTtJQUN4QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxTQUFTO1FBQUVDLFVBQVU7SUFBZTtJQUNwQ0MsT0FBTztRQUFFQyxRQUFRO0lBQVM7SUFDMUJDLFdBQVcsRUFBRTtJQUNiQyxXQUFXO1FBQ1RDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxFQUFFO1lBQ3ZDLE1BQU1DLGFBQWEsQ0FBQyxDQUFDSCxNQUFNSTtZQUMzQixNQUFNQyxXQUFXSCxRQUFRRyxRQUFRO1lBRWpDQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUVGLFNBQVMsZUFBZSxFQUFFRixXQUFXLFNBQVMsRUFBRUgsTUFBTUksTUFBTUksU0FBUyxRQUFRO1lBRXpHLE1BQU1DLGFBQWFKLGFBQWEsWUFBWUEsYUFBYTtZQUV6RCxJQUFJRixjQUFjTSxZQUFZO2dCQUM1QkgsUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE9BQU9HLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtWO1lBQ3hDO1lBQ0EsSUFBSSxDQUFDQyxjQUFjLENBQUNNLFlBQVk7Z0JBQzlCSCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBT0csU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVY7WUFDN0M7WUFFQUksUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUEyQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxKb2FuIENyZXNww61cXHJlZWwtaWRlYXNcXGF1dGguY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhDb25maWcgfSBmcm9tICduZXh0LWF1dGgnO1xuXG5leHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIGFzIGNvbnN0IH0sXG4gIHBhZ2VzOiB7IHNpZ25JbjogJy9sb2dpbicgfSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZCh7IGF1dGgsIHJlcXVlc3Q6IHsgbmV4dFVybCB9IH0pIHtcbiAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIWF1dGg/LnVzZXI7XG4gICAgICBjb25zdCBwYXRobmFtZSA9IG5leHRVcmwucGF0aG5hbWU7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbbWlkZGxld2FyZV0gJHtwYXRobmFtZX0g4oCUIGlzTG9nZ2VkSW46ICR7aXNMb2dnZWRJbn0gfCB1c2VyOiAke2F1dGg/LnVzZXI/LmVtYWlsID8/ICdub25lJ31gKTtcblxuICAgICAgY29uc3QgaXNBdXRoUGFnZSA9IHBhdGhuYW1lID09PSAnL2xvZ2luJyB8fCBwYXRobmFtZSA9PT0gJy9yZWdpc3Rlcic7XG5cbiAgICAgIGlmIChpc0xvZ2dlZEluICYmIGlzQXV0aFBhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ttaWRkbGV3YXJlXSBsb2dnZWQgaW4gdXNlciBvbiBhdXRoIHBhZ2Ug4oaSIHJlZGlyZWN0IC8nKTtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCBuZXh0VXJsKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzTG9nZ2VkSW4gJiYgIWlzQXV0aFBhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ttaWRkbGV3YXJlXSBub3QgbG9nZ2VkIGluLCBwcm90ZWN0ZWQgcm91dGUg4oaSIHJlZGlyZWN0IC9sb2dpbicpO1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgbmV4dFVybCkpO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnW21pZGRsZXdhcmVdIGFjY2VzcyBncmFudGVkJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9LFxufSBzYXRpc2ZpZXMgTmV4dEF1dGhDb25maWc7XG4iXSwibmFtZXMiOlsiYXV0aENvbmZpZyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsIm5leHRVcmwiLCJpc0xvZ2dlZEluIiwidXNlciIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiaXNBdXRoUGFnZSIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./auth.config.ts\n");

/***/ }),

/***/ "(rsc)/./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.config */ \"(rsc)/./auth.config.ts\");\n\n\n\n\nconst { handlers, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ..._auth_config__WEBPACK_IMPORTED_MODULE_3__.authConfig,\n    secret: process.env.NEXTAUTH_SECRET,\n    trustHost: true,\n    session: {\n        strategy: 'jwt'\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Contraseña',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                console.log('[auth] authorize called — email:', credentials?.email, '| password present:', !!credentials?.password);\n                if (!credentials?.email || !credentials?.password) {\n                    console.log('[auth] missing credentials, returning null');\n                    return null;\n                }\n                const email = credentials.email.toLowerCase().trim();\n                // Dynamic import keeps Supabase out of the edge bundle\n                const { getSupabase } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@supabase\"), __webpack_require__.e(\"vendor-chunks/tslib\"), __webpack_require__.e(\"vendor-chunks/iceberg-js\"), __webpack_require__.e(\"_rsc_lib_supabase_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/lib/supabase */ \"(rsc)/./lib/supabase.ts\"));\n                const supabase = getSupabase();\n                const { data: user, error } = await supabase.from('reel_users').select('id, email, password_hash, nombre').eq('email', email).single();\n                console.log('[auth] Supabase query — found:', !!user, '| error:', error?.message ?? 'none', '| hash prefix:', user?.password_hash?.slice(0, 10) ?? 'n/a');\n                if (!user) return null;\n                const valid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password_hash);\n                console.log('[auth] bcrypt.compare result:', valid);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.nombre || null\n                };\n            }\n        })\n    ],\n    callbacks: {\n        ..._auth_config__WEBPACK_IMPORTED_MODULE_3__.authConfig.callbacks,\n        jwt ({ token, user }) {\n            if (user?.id) token.sub = user.id;\n            return token;\n        },\n        session ({ session, token }) {\n            if (token.sub) session.user.id = token.sub;\n            return session;\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBQ3ZCO0FBQ1E7QUFFcEMsTUFBTSxFQUFFSSxRQUFRLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1AscURBQVFBLENBQUM7SUFDMUQsR0FBR0csb0RBQVU7SUFDYkssUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO0lBQ1hDLFNBQVM7UUFBRUMsVUFBVTtJQUFNO0lBQzNCQyxXQUFXO1FBQ1RkLDJFQUFXQSxDQUFDO1lBQ1ZlLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFjQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekJNLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBb0NQLGFBQWFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQ0QsYUFBYUk7Z0JBRTFHLElBQUksQ0FBQ0osYUFBYUMsU0FBUyxDQUFDRCxhQUFhSSxVQUFVO29CQUNqREUsUUFBUUMsR0FBRyxDQUFDO29CQUNaLE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTU4sUUFBUSxZQUFhQSxLQUFLLENBQVlPLFdBQVcsR0FBR0MsSUFBSTtnQkFFOUQsdURBQXVEO2dCQUN2RCxNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHLE1BQU0sbVVBQXdCO2dCQUN0RCxNQUFNQyxXQUFXRDtnQkFFakIsTUFBTSxFQUFFRSxNQUFNQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ILFNBQ2pDSSxJQUFJLENBQUMsY0FDTEMsTUFBTSxDQUFDLG9DQUNQQyxFQUFFLENBQUMsU0FBU2hCLE9BQ1ppQixNQUFNO2dCQUVUWixRQUFRQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQ00sTUFBTSxZQUFZQyxPQUFPSyxXQUFXLFFBQVEsa0JBQWtCTixNQUFNTyxlQUFlQyxNQUFNLEdBQUcsT0FBTztnQkFFbkosSUFBSSxDQUFDUixNQUFNLE9BQU87Z0JBRWxCLE1BQU1TLFFBQVEsTUFBTXBDLGlEQUFPQSxDQUFDYyxZQUFZSSxRQUFRLEVBQVlTLEtBQUtPLGFBQWE7Z0JBQzlFZCxRQUFRQyxHQUFHLENBQUMsaUNBQWlDZTtnQkFFN0MsSUFBSSxDQUFDQSxPQUFPLE9BQU87Z0JBRW5CLE9BQU87b0JBQ0xDLElBQUlWLEtBQUtVLEVBQUU7b0JBQ1h0QixPQUFPWSxLQUFLWixLQUFLO29CQUNqQnVCLE1BQU0sS0FBTUMsTUFBTSxJQUFlO2dCQUNuQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsR0FBR3ZDLG9EQUFVQSxDQUFDdUMsU0FBUztRQUN2QkMsS0FBSSxFQUFFQyxLQUFLLEVBQUVmLElBQUksRUFBRTtZQUNqQixJQUFJQSxNQUFNVSxJQUFJSyxNQUFNQyxHQUFHLEdBQUdoQixLQUFLVSxFQUFFO1lBQ2pDLE9BQU9LO1FBQ1Q7UUFDQS9CLFNBQVEsRUFBRUEsT0FBTyxFQUFFK0IsS0FBSyxFQUFFO1lBQ3hCLElBQUlBLE1BQU1DLEdBQUcsRUFBRWhDLFFBQVFnQixJQUFJLENBQUNVLEVBQUUsR0FBR0ssTUFBTUMsR0FBRztZQUMxQyxPQUFPaEM7UUFDVDtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxKb2FuIENyZXNww61cXHJlZWwtaWRlYXNcXGF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgYXV0aENvbmZpZyB9IGZyb20gJy4vYXV0aC5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgeyBoYW5kbGVycywgYXV0aCwgc2lnbkluLCBzaWduT3V0IH0gPSBOZXh0QXV0aCh7XG4gIC4uLmF1dGhDb25maWcsXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICB0cnVzdEhvc3Q6IHRydWUsXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnQ29udHJhc2XDsWEnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbYXV0aF0gYXV0aG9yaXplIGNhbGxlZCDigJQgZW1haWw6JywgY3JlZGVudGlhbHM/LmVtYWlsLCAnfCBwYXNzd29yZCBwcmVzZW50OicsICEhY3JlZGVudGlhbHM/LnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1thdXRoXSBtaXNzaW5nIGNyZWRlbnRpYWxzLCByZXR1cm5pbmcgbnVsbCcpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSAoY3JlZGVudGlhbHMuZW1haWwgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuICAgICAgICAvLyBEeW5hbWljIGltcG9ydCBrZWVwcyBTdXBhYmFzZSBvdXQgb2YgdGhlIGVkZ2UgYnVuZGxlXG4gICAgICAgIGNvbnN0IHsgZ2V0U3VwYWJhc2UgfSA9IGF3YWl0IGltcG9ydCgnQC9saWIvc3VwYWJhc2UnKTtcbiAgICAgICAgY29uc3Qgc3VwYWJhc2UgPSBnZXRTdXBhYmFzZSgpO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXNlciwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oJ3JlZWxfdXNlcnMnKVxuICAgICAgICAgIC5zZWxlY3QoJ2lkLCBlbWFpbCwgcGFzc3dvcmRfaGFzaCwgbm9tYnJlJylcbiAgICAgICAgICAuZXEoJ2VtYWlsJywgZW1haWwpXG4gICAgICAgICAgLnNpbmdsZSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbYXV0aF0gU3VwYWJhc2UgcXVlcnkg4oCUIGZvdW5kOicsICEhdXNlciwgJ3wgZXJyb3I6JywgZXJyb3I/Lm1lc3NhZ2UgPz8gJ25vbmUnLCAnfCBoYXNoIHByZWZpeDonLCB1c2VyPy5wYXNzd29yZF9oYXNoPy5zbGljZSgwLCAxMCkgPz8gJ24vYScpO1xuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBjb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkIGFzIHN0cmluZywgdXNlci5wYXNzd29yZF9oYXNoIGFzIHN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbYXV0aF0gYmNyeXB0LmNvbXBhcmUgcmVzdWx0OicsIHZhbGlkKTtcblxuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkIGFzIHN0cmluZyxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCBhcyBzdHJpbmcsXG4gICAgICAgICAgbmFtZTogKHVzZXIubm9tYnJlIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIC4uLmF1dGhDb25maWcuY2FsbGJhY2tzLFxuICAgIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyPy5pZCkgdG9rZW4uc3ViID0gdXNlci5pZDtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4uc3ViKSBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsImNvbXBhcmUiLCJhdXRoQ29uZmlnIiwiaGFuZGxlcnMiLCJhdXRoIiwic2lnbkluIiwic2lnbk91dCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJ0cnVzdEhvc3QiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwiZ2V0U3VwYWJhc2UiLCJzdXBhYmFzZSIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJtZXNzYWdlIiwicGFzc3dvcmRfaGFzaCIsInNsaWNlIiwidmFsaWQiLCJpZCIsIm5hbWUiLCJub21icmUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInN1YiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CJoan%20Cresp%C3%AD%5Creel-ideas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();