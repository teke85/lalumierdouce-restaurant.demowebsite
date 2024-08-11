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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// components/MenuSection.tsx\n\nconst menuItems = [\n    {\n        name: \"Classic Burger\",\n        description: \"A juicy beef burger with cheese, lettuce, and tomato.\",\n        price: \"$12.99\"\n    },\n    {\n        name: \"Grilled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Boiled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Grilled Meat Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    }\n];\nfunction MenuSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-12 bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"w-[70%] h-3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 55\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-semibold font-aboreto mt-5 text-2xl\",\n                        children: \"FROM THE SEA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 85\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                id: \"third-section\",\n                initial: \"hidden\",\n                animate: \"visible\",\n                transition: {\n                    staggerChildren: 0.3\n                },\n                className: \"grid gap-8 max-w-6xl mx-auto\",\n                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        variants: {\n                            hidden: {\n                                opacity: 0,\n                                y: 20\n                            },\n                            visible: {\n                                opacity: 1,\n                                y: 0\n                            }\n                        },\n                        className: \"p-6 bg-white rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold font-aboreto\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 mt-2 font-lora\",\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold mt-4 font-aboreto\",\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuSection;\nvar _c;\n$RefreshReg$(_c, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw2QkFBNkI7QUFDVTtBQUd2QyxNQUFNQyxZQUFZO0lBQ2hCO1FBQUVDLE1BQU07UUFBbUJDLGFBQWE7UUFBeURDLE9BQU87SUFBUztJQUNqSDtRQUFFRixNQUFNO1FBQXlCQyxhQUFhO1FBQW9FQyxPQUFPO0lBQVM7SUFDbEk7UUFBRUYsTUFBTTtRQUF3QkMsYUFBYTtRQUFvRUMsT0FBTztJQUFTO0lBQ2pJO1FBQUVGLE1BQU07UUFBc0JDLGFBQWE7UUFBb0VDLE9BQU87SUFBUztDQUVoSTtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDbkIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FBbUMsOERBQUNFO3dCQUFHRixXQUFVOzs7Ozs7a0NBQWdCLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7OzswQkF1QnZJLDhEQUFDUCxpREFBTUEsQ0FBQ1EsR0FBRztnQkFDVEcsSUFBRztnQkFDSEMsU0FBUTtnQkFDUkMsU0FBUTtnQkFDUkMsWUFBWTtvQkFBRUMsaUJBQWlCO2dCQUFJO2dCQUNuQ1IsV0FBVTswQkFFVE4sVUFBVWUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ2xCLGlEQUFNQSxDQUFDUSxHQUFHO3dCQUVUVyxVQUFVOzRCQUNSQyxRQUFRO2dDQUFFQyxTQUFTO2dDQUFHQyxHQUFHOzRCQUFHOzRCQUM1QkMsU0FBUztnQ0FBRUYsU0FBUztnQ0FBR0MsR0FBRzs0QkFBRTt3QkFDOUI7d0JBQ0FmLFdBQVU7OzBDQUVWLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FBdUNVLEtBQUtmLElBQUk7Ozs7OzswQ0FDOUQsOERBQUNzQjtnQ0FBRWpCLFdBQVU7MENBQWdDVSxLQUFLZCxXQUFXOzs7Ozs7MENBQzdELDhEQUFDcUI7Z0NBQUVqQixXQUFVOzBDQUF1Q1UsS0FBS2IsS0FBSzs7Ozs7Ozt1QkFUekRjOzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpCO0tBbER3QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51U2VjdGlvbi50c3g/YmU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbi8vIGNvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHsgbmFtZTogJ0NsYXNzaWMgQnVyZ2VyJywgIGRlc2NyaXB0aW9uOiAnQSBqdWljeSBiZWVmIGJ1cmdlciB3aXRoIGNoZWVzZSwgbGV0dHVjZSwgYW5kIHRvbWF0by4nLCBwcmljZTogJyQxMi45OScgfSxcclxuICB7IG5hbWU6ICdHcmlsbGVkIENoaWNrZW4gU2FsYWQnLCBkZXNjcmlwdGlvbjogJ01peGVkIGdyZWVucywgZ3JpbGxlZCBjaGlja2VuLCBjaGVycnkgdG9tYXRvZXMsIGFuZCB2aW5haWdyZXR0ZS4nLCBwcmljZTogJyQxMC45OScgfSxcclxuICB7IG5hbWU6ICdCb2lsZWQgQ2hpY2tlbiBTYWxhZCcsIGRlc2NyaXB0aW9uOiAnTWl4ZWQgZ3JlZW5zLCBncmlsbGVkIGNoaWNrZW4sIGNoZXJyeSB0b21hdG9lcywgYW5kIHZpbmFpZ3JldHRlLicsIHByaWNlOiAnJDEwLjk5JyB9LFxyXG4gIHsgbmFtZTogJ0dyaWxsZWQgTWVhdCBTYWxhZCcsIGRlc2NyaXB0aW9uOiAnTWl4ZWQgZ3JlZW5zLCBncmlsbGVkIGNoaWNrZW4sIGNoZXJyeSB0b21hdG9lcywgYW5kIHZpbmFpZ3JldHRlLicsIHByaWNlOiAnJDEwLjk5JyB9LFxyXG4gIC8vIE1vcmUgaXRlbXMuLi5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVTZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTEyIGJnLWdyYXktMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+PGhyIGNsYXNzTmFtZT1cInctWzcwJV0gaC0zXCIgLz48aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWFib3JldG8gbXQtNSB0ZXh0LTJ4bFwiPkZST00gVEhFIFNFQTwvaDM+PC9kaXY+XHJcbiAgICBcclxuICAgICAgey8qIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgc3RhZ2dlckNoaWxkcmVuOiAwLjMgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdhcC04IG1heC13LTZ4bCBteC1hdXRvXCJcclxuICAgICAgPlxyXG4gICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMjAgfSxcclxuICAgICAgICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgbXQtMlwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXQtNFwiPntpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9tb3Rpb24uZGl2PiAqL31cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBpZD1cInRoaXJkLXNlY3Rpb25cIlxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcclxuICAgICAgICB0cmFuc2l0aW9uPXt7IHN0YWdnZXJDaGlsZHJlbjogMC4zIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCBtYXgtdy02eGwgbXgtYXV0b1wiXHJcbiAgICAgID5cclxuICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGZvbnQtYWJvcmV0b1wiPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtdC0yIGZvbnQtbG9yYVwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXQtNCBmb250LWFib3JldG9cIj57aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJtZW51SXRlbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk1lbnVTZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhyIiwiaDMiLCJpZCIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MenuSection.tsx\n"));

/***/ })

});