"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/service/user */ \"(api)/./src/service/user.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_OAUTH_ID || \"\",\n            clientSecret: process.env.GOOGLE_OAUTH_SECRET || \"\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user: { id , name , image , email  }  }) {\n            if (!email) {\n                return false;\n            }\n            (0,_service_user__WEBPACK_IMPORTED_MODULE_0__.addUser)({\n                id,\n                name: name || \"\",\n                image,\n                email,\n                username: email.split(\"@\")[0]\n            });\n            return true;\n        },\n        async session ({ session  }) {\n            console.log(session);\n            const user = session?.user;\n            if (user) {\n                session.user = {\n                    ...user,\n                    username: user.email?.split(\"@\")[0] || \"\"\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ1c7QUFDSTtBQUNqRCxNQUFNRyxjQUE4QjtJQUN6QyxpREFBaUQ7SUFDakRDLFdBQVc7UUFDVEYsaUVBQWNBLENBQUM7WUFDYkcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlLElBQUk7WUFDekNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csbUJBQW1CLElBQUk7UUFDbkQ7S0FFRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsUUFBTyxFQUFDQyxNQUFNLEVBQUNDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBQyxHQUFDLEVBQUU7WUFDN0MsSUFBRyxDQUFDQSxPQUFPO2dCQUNULE9BQU8sS0FBSztZQUNkLENBQUM7WUFDRGpCLHNEQUFPQSxDQUFDO2dCQUNOYztnQkFDQUMsTUFBTUEsUUFBUTtnQkFDZEM7Z0JBQ0FDO2dCQUNBQyxVQUFVRCxNQUFNRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0I7WUFDQSxPQUFPLElBQUk7UUFDYjtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFLEVBQUU7WUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixNQUFNUCxPQUFPTyxTQUFTUDtZQUN0QixJQUFJQSxNQUFNO2dCQUNSTyxRQUFRUCxJQUFJLEdBQUc7b0JBQ2IsR0FBR0EsSUFBSTtvQkFDUEssVUFBVUwsS0FBS0ksS0FBSyxFQUFFRSxNQUFNLElBQUksQ0FBQyxFQUFFLElBQUk7Z0JBQ3pDO1lBQ0YsQ0FBQztZQUNELE9BQU9DO1FBQ1Q7SUFDRjtJQUNBRyxPQUFPO1FBQ0xYLFFBQVE7SUFDVjtBQUNGLEVBQUU7QUFDRixpRUFBZVgsZ0RBQVFBLENBQUNFLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnN0YWdyYW0vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFVzZXIgfSBmcm9tICdAL3NlcnZpY2UvdXNlcic7XG5pbXBvcnQgTmV4dEF1dGgsIHtOZXh0QXV0aE9wdGlvbnN9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOk5leHRBdXRoT3B0aW9ucyA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX09BVVRIX0lEIHx8ICcnLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfT0FVVEhfU0VDUkVUIHx8ICcnLFxuICAgIH0pLFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7dXNlcjoge2lkLCBuYW1lLCBpbWFnZSwgZW1haWx9fSkge1xuICAgICAgaWYoIWVtYWlsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGFkZFVzZXIoe1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZTogbmFtZSB8fCAnJyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICB1c2VybmFtZTogZW1haWwuc3BsaXQoJ0AnKVswXVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuICAgICAgY29uc3QgdXNlciA9IHNlc3Npb24/LnVzZXI7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbD8uc3BsaXQoJ0AnKVswXSB8fCAnJyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJhZGRVc2VyIiwiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX09BVVRIX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX09BVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJpZCIsIm5hbWUiLCJpbWFnZSIsImVtYWlsIiwidXNlcm5hbWUiLCJzcGxpdCIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/service/sanity.ts":
/*!*******************************!*\
  !*** ./src/service/sanity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId: process.env.SANITY_PROJECT_ID,\n    dataset: process.env.SANITY_DATASET,\n    useCdn: false,\n    apiVersion: \"2023-03-20\",\n    token: process.env.SANITY_SECRET_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZS9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNELDREQUFZQSxDQUFDO0lBQ2pDRSxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtJQUN4Q0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxjQUFjO0lBQ25DQyxRQUFRLEtBQUs7SUFDYkMsWUFBWTtJQUNaQyxPQUFPUCxRQUFRQyxHQUFHLENBQUNPLG1CQUFtQjtBQUN4QyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5zdGFncmFtLy4vc3JjL3NlcnZpY2Uvc2FuaXR5LnRzP2E1ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHNhbml0eS9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TQU5JVFlfUFJPSkVDVF9JRCxcbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuU0FOSVRZX0RBVEFTRVQsXG4gIHVzZUNkbjogZmFsc2UsIFxuICBhcGlWZXJzaW9uOiAnMjAyMy0wMy0yMCcsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfU0VDUkVUX1RPS0VOIFxufSkiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY2xpZW50IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIlNBTklUWV9QUk9KRUNUX0lEIiwiZGF0YXNldCIsIlNBTklUWV9EQVRBU0VUIiwidXNlQ2RuIiwiYXBpVmVyc2lvbiIsInRva2VuIiwiU0FOSVRZX1NFQ1JFVF9UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/service/sanity.ts\n");

/***/ }),

/***/ "(api)/./src/service/user.ts":
/*!*****************************!*\
  !*** ./src/service/user.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": () => (/* binding */ addUser)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity */ \"(api)/./src/service/sanity.ts\");\n\nasync function addUser({ id , username , email , name , image  }) {\n    return _sanity__WEBPACK_IMPORTED_MODULE_0__.client.createIfNotExists({\n        _id: id,\n        _type: \"user\",\n        username,\n        email,\n        name,\n        image,\n        following: [],\n        followers: [],\n        bookmarks: []\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZS91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBVXpCLGVBQWVDLFFBQVEsRUFBQ0MsR0FBRSxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQWEsRUFBRTtJQUM1RSxPQUFPTiw2REFBd0IsQ0FBQztRQUM5QlEsS0FBS047UUFDTE8sT0FBTztRQUNQTjtRQUNBQztRQUNBQztRQUNBQztRQUNBSSxXQUFXLEVBQUU7UUFDYkMsV0FBVyxFQUFFO1FBQ2JDLFdBQVcsRUFBRTtJQUNmO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luc3RhZ3JhbS8uL3NyYy9zZXJ2aWNlL3VzZXIudHM/ZjhlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NsaWVudH0gZnJvbSAnLi9zYW5pdHknO1xuXG50eXBlIE9BdXRoVXNlciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRVc2VyKHtpZCwgdXNlcm5hbWUsIGVtYWlsLCBuYW1lLCBpbWFnZX0gOiBPQXV0aFVzZXIpIHtcbiAgcmV0dXJuIGNsaWVudC5jcmVhdGVJZk5vdEV4aXN0cyh7XG4gICAgX2lkOiBpZCxcbiAgICBfdHlwZTogJ3VzZXInLFxuICAgIHVzZXJuYW1lLFxuICAgIGVtYWlsLFxuICAgIG5hbWUsXG4gICAgaW1hZ2UsXG4gICAgZm9sbG93aW5nOiBbXSxcbiAgICBmb2xsb3dlcnM6IFtdLFxuICAgIGJvb2ttYXJrczogW10sXG4gIH0pXG59Il0sIm5hbWVzIjpbImNsaWVudCIsImFkZFVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJuYW1lIiwiaW1hZ2UiLCJjcmVhdGVJZk5vdEV4aXN0cyIsIl9pZCIsIl90eXBlIiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwiYm9va21hcmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/service/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();