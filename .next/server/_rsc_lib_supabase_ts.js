"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_lib_supabase_ts";
exports.ids = ["_rsc_lib_supabase_ts"];
exports.modules = {

/***/ "(rsc)/./lib/supabase.ts":
/*!*************************!*\
  !*** ./lib/supabase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSupabase: () => (/* binding */ getSupabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\nlet _client = null;\n// Lazy initialization so the client isn't created at module load time (build fails otherwise).\nfunction getSupabase() {\n    if (_client) return _client;\n    const url = process.env.SUPABASE_URL;\n    const key = process.env.SUPABASE_SERVICE_KEY;\n    if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY must be set');\n    _client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, key, {\n        auth: {\n            autoRefreshToken: false,\n            persistSession: false\n        }\n    });\n    return _client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEU7QUFFMUUsSUFBSUMsVUFBaUM7QUFFckMsK0ZBQStGO0FBQ3hGLFNBQVNDO0lBQ2QsSUFBSUQsU0FBUyxPQUFPQTtJQUNwQixNQUFNRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7SUFDcEMsTUFBTUMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7SUFDNUMsSUFBSSxDQUFDTCxPQUFPLENBQUNJLEtBQUssTUFBTSxJQUFJRSxNQUFNO0lBQ2xDUixVQUFVRCxtRUFBWUEsQ0FBQ0csS0FBS0ksS0FBSztRQUMvQkcsTUFBTTtZQUFFQyxrQkFBa0I7WUFBT0MsZ0JBQWdCO1FBQU07SUFDekQ7SUFDQSxPQUFPWDtBQUNUIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEpvYW4gQ3Jlc3DDrVxccmVlbC1pZGVhc1xcbGliXFxzdXBhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIHR5cGUgU3VwYWJhc2VDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5sZXQgX2NsaWVudDogU3VwYWJhc2VDbGllbnQgfCBudWxsID0gbnVsbDtcblxuLy8gTGF6eSBpbml0aWFsaXphdGlvbiBzbyB0aGUgY2xpZW50IGlzbid0IGNyZWF0ZWQgYXQgbW9kdWxlIGxvYWQgdGltZSAoYnVpbGQgZmFpbHMgb3RoZXJ3aXNlKS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBhYmFzZSgpOiBTdXBhYmFzZUNsaWVudCB7XG4gIGlmIChfY2xpZW50KSByZXR1cm4gX2NsaWVudDtcbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMO1xuICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWTtcbiAgaWYgKCF1cmwgfHwgIWtleSkgdGhyb3cgbmV3IEVycm9yKCdTVVBBQkFTRV9VUkwgYW5kIFNVUEFCQVNFX1NFUlZJQ0VfS0VZIG11c3QgYmUgc2V0Jyk7XG4gIF9jbGllbnQgPSBjcmVhdGVDbGllbnQodXJsLCBrZXksIHtcbiAgICBhdXRoOiB7IGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLCBwZXJzaXN0U2Vzc2lvbjogZmFsc2UgfSxcbiAgfSk7XG4gIHJldHVybiBfY2xpZW50O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIl9jbGllbnQiLCJnZXRTdXBhYmFzZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJTVVBBQkFTRV9VUkwiLCJrZXkiLCJTVVBBQkFTRV9TRVJWSUNFX0tFWSIsIkVycm9yIiwiYXV0aCIsImF1dG9SZWZyZXNoVG9rZW4iLCJwZXJzaXN0U2Vzc2lvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase.ts\n");

/***/ })

};
;