"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/the-menu/page",{

/***/ "(app-pages-browser)/./components/MenuSection.tsx":
/*!************************************!*\
  !*** ./components/MenuSection.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// components/MenuSection.tsx\n\nconst menuItems = [\n    {\n        name: \"Classic Burger\",\n        description: \"A juicy beef burger with cheese, lettuce, and tomato.\",\n        price: \"$12.99\"\n    },\n    {\n        name: \"Grilled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Boiled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Grilled Meat Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    }\n];\nfunction MenuSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col gap-3 p-12 bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"flex-grow border-t border-gray-300\",\n                        style: {\n                            maxWidth: \"70%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        id: \"third-section\",\n                        className: \"font-semibold font-verdana mx-4 text-2xl\",\n                        children: \"FROM THE SEA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 46,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                initial: \"hidden\",\n                animate: \"visible\",\n                transition: {\n                    staggerChildren: 0.3\n                },\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-red-600\",\n                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        variants: {\n                            hidden: {\n                                opacity: 0,\n                                y: 20\n                            },\n                            visible: {\n                                opacity: 1,\n                                y: 0\n                            }\n                        },\n                        className: \"p-6 bg-white rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold font-aboreto\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 mt-2 font-lora\",\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold mt-4 font-aboreto\",\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"2222\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuSection;\nvar _c;\n$RefreshReg$(_c, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw2QkFBNkI7QUFDVTtBQUd2QyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPO0lBQ1Q7Q0FFRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE9BQU87NEJBQUVDLFVBQVU7d0JBQU07Ozs7OztrQ0FFM0IsOERBQUNDO3dCQUFHQyxJQUFHO3dCQUFnQk4sV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7OzswQkFJcEYsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7MEJBQ1QsOERBQUNQLGlEQUFNQSxDQUFDUSxHQUFHO2dCQUNUTSxTQUFRO2dCQUNSQyxTQUFRO2dCQUNSQyxZQUFZO29CQUFFQyxpQkFBaUI7Z0JBQUk7Z0JBQ25DVixXQUFVOzBCQUVUTixVQUFVaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ3BCLGlEQUFNQSxDQUFDUSxHQUFHO3dCQUVUYSxVQUFVOzRCQUNSQyxRQUFRO2dDQUFFQyxTQUFTO2dDQUFHQyxHQUFHOzRCQUFHOzRCQUM1QkMsU0FBUztnQ0FBRUYsU0FBUztnQ0FBR0MsR0FBRzs0QkFBRTt3QkFDOUI7d0JBQ0FqQixXQUFVOzswQ0FFViw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQXVDWSxLQUFLakIsSUFBSTs7Ozs7OzBDQUM5RCw4REFBQ3dCO2dDQUFFbkIsV0FBVTswQ0FBZ0NZLEtBQUtoQixXQUFXOzs7Ozs7MENBQzdELDhEQUFDdUI7Z0NBQUVuQixXQUFVOzBDQUF1Q1ksS0FBS2YsS0FBSzs7Ozs7Ozt1QkFUekRnQjs7Ozs7Ozs7OzswQkFhWCw4REFBQ1o7MEJBQUk7Ozs7Ozs7Ozs7OztBQUdYO0tBckN3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51U2VjdGlvbi50c3g/YmU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbi8vIGNvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkNsYXNzaWMgQnVyZ2VyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIGp1aWN5IGJlZWYgYnVyZ2VyIHdpdGggY2hlZXNlLCBsZXR0dWNlLCBhbmQgdG9tYXRvLlwiLFxyXG4gICAgcHJpY2U6IFwiJDEyLjk5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkdyaWxsZWQgQ2hpY2tlbiBTYWxhZFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTWl4ZWQgZ3JlZW5zLCBncmlsbGVkIGNoaWNrZW4sIGNoZXJyeSB0b21hdG9lcywgYW5kIHZpbmFpZ3JldHRlLlwiLFxyXG4gICAgcHJpY2U6IFwiJDEwLjk5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJvaWxlZCBDaGlja2VuIFNhbGFkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNaXhlZCBncmVlbnMsIGdyaWxsZWQgY2hpY2tlbiwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgdmluYWlncmV0dGUuXCIsXHJcbiAgICBwcmljZTogXCIkMTAuOTlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JpbGxlZCBNZWF0IFNhbGFkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNaXhlZCBncmVlbnMsIGdyaWxsZWQgY2hpY2tlbiwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgdmluYWlncmV0dGUuXCIsXHJcbiAgICBwcmljZTogXCIkMTAuOTlcIixcclxuICB9LFxyXG4gIC8vIE1vcmUgaXRlbXMuLi5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVTZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHAtMTIgYmctZ3JheS0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxoclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IGJvcmRlci10IGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCI3MCVcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgzIGlkPVwidGhpcmQtc2VjdGlvblwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC12ZXJkYW5hIG14LTQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgIEZST00gVEhFIFNFQVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcclxuICAgICAgICB0cmFuc2l0aW9uPXt7IHN0YWdnZXJDaGlsZHJlbjogMC4zIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOCBtYXgtdy01eGwgbXgtYXV0byBiZy1yZWQtNjAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMjAgfSxcclxuICAgICAgICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgZm9udC1hYm9yZXRvXCI+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG10LTIgZm9udC1sb3JhXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtdC00IGZvbnQtYWJvcmV0b1wiPntpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8ZGl2PjIyMjI8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJtZW51SXRlbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk1lbnVTZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhyIiwic3R5bGUiLCJtYXhXaWR0aCIsImgzIiwiaWQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MenuSection.tsx\n"));

/***/ })

});