"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tags/[tag]/page",{

/***/ "(app-pages-browser)/./src/app/tags/[tag]/page.tsx":
/*!*************************************!*\
  !*** ./src/app/tags/[tag]/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_notes_NoteList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/notes/NoteList */ \"(app-pages-browser)/./src/components/notes/NoteList.tsx\");\n/* harmony import */ var _context_NotesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/NotesContext */ \"(app-pages-browser)/./src/context/NotesContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TagPage = ()=>{\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const tag = params.tag;\n    const { notes } = (0,_context_NotesContext__WEBPACK_IMPORTED_MODULE_3__.useNotes)();\n    const filteredNotes = notes.filter((note)=>note.tags.includes(tag.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex-1 p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-6\",\n                    children: [\n                        \"Notes tagged with: \",\n                        tag\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\hweth\\\\OneDrive\\\\Desktop\\\\Innovera\\\\Rapid Prototyping\\\\notes-platform\\\\src\\\\app\\\\tags\\\\[tag]\\\\page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_notes_NoteList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    notes: filteredNotes\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hweth\\\\OneDrive\\\\Desktop\\\\Innovera\\\\Rapid Prototyping\\\\notes-platform\\\\src\\\\app\\\\tags\\\\[tag]\\\\page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hweth\\\\OneDrive\\\\Desktop\\\\Innovera\\\\Rapid Prototyping\\\\notes-platform\\\\src\\\\app\\\\tags\\\\[tag]\\\\page.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hweth\\\\OneDrive\\\\Desktop\\\\Innovera\\\\Rapid Prototyping\\\\notes-platform\\\\src\\\\app\\\\tags\\\\[tag]\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TagPage, \"cazy9ChaQi8MHHJUSuwNroUV3HI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams,\n        _context_NotesContext__WEBPACK_IMPORTED_MODULE_3__.useNotes\n    ];\n});\n_c = TagPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagPage);\nvar _c;\n$RefreshReg$(_c, \"TagPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGFncy9bdGFnXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUc0QztBQUNPO0FBQ0Q7QUFFbEQsTUFBTUcsVUFBYzs7SUFDbEIsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLE1BQU1ELE9BQU9DLEdBQUc7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0osK0RBQVFBO0lBRTFCLE1BQU1LLGdCQUFnQkQsTUFBTUUsTUFBTSxDQUFDQyxDQUFBQSxPQUNqQ0EsS0FBS0MsSUFBSSxDQUFDQyxRQUFRLENBQUNOLElBQUlPLFdBQVc7SUFHcEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtELFdBQVU7OzhCQUNkLDhEQUFDRTtvQkFBR0YsV0FBVTs7d0JBQTBCO3dCQUFvQlQ7Ozs7Ozs7OEJBQzVELDhEQUFDSixrRUFBUUE7b0JBQUNLLE9BQU9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtHQWpCTUo7O1FBQ1dILHNEQUFTQTtRQUVORSwyREFBUUE7OztLQUh0QkM7QUFtQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90YWdzL1t0YWddL3BhZ2UudHN4P2NhYzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IE5vdGVMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9ub3Rlcy9Ob3RlTGlzdCc7XHJcbmltcG9ydCB7IHVzZU5vdGVzIH0gZnJvbSAnQC9jb250ZXh0L05vdGVzQ29udGV4dCc7XHJcblxyXG5jb25zdCBUYWdQYWdlOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCB0YWcgPSBwYXJhbXMudGFnIGFzIHN0cmluZztcclxuICBjb25zdCB7IG5vdGVzIH0gPSB1c2VOb3RlcygpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZE5vdGVzID0gbm90ZXMuZmlsdGVyKG5vdGUgPT4gXHJcbiAgICBub3RlLnRhZ3MuaW5jbHVkZXModGFnLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHAtNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNlwiPk5vdGVzIHRhZ2dlZCB3aXRoOiB7dGFnfTwvaDE+XHJcbiAgICAgICAgPE5vdGVMaXN0IG5vdGVzPXtmaWx0ZXJlZE5vdGVzfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFnUGFnZTsgIl0sIm5hbWVzIjpbInVzZVBhcmFtcyIsIk5vdGVMaXN0IiwidXNlTm90ZXMiLCJUYWdQYWdlIiwicGFyYW1zIiwidGFnIiwibm90ZXMiLCJmaWx0ZXJlZE5vdGVzIiwiZmlsdGVyIiwibm90ZSIsInRhZ3MiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tags/[tag]/page.tsx\n"));

/***/ })

});