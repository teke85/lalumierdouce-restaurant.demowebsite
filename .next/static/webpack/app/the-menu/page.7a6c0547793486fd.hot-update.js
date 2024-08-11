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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// components/MenuSection.tsx\n\nconst menuItems = [\n    {\n        name: \"Classic Burger\",\n        description: \"A juicy beef burger with cheese, lettuce, and tomato.\",\n        price: \"$12.99\"\n    },\n    {\n        name: \"Grilled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Boiled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Grilled Meat Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    }\n];\nfunction MenuSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col gap-3 p-12 bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"flex-grow border-t border-gray-300\",\n                        style: {\n                            maxWidth: \"70%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        id: \"third-section\",\n                        className: \"font-semibold font-aboreto mx-4 text-2xl\",\n                        children: \"FROM THE SEA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"flex-grow border-t border-gray-300\",\n                        style: {\n                            maxWidth: \"70%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                initial: \"hidden\",\n                animate: \"visible\",\n                transition: {\n                    staggerChildren: 0.3\n                },\n                className: \"grid gap-8 max-w-3xl mx-auto\",\n                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        variants: {\n                            hidden: {\n                                opacity: 0,\n                                y: 20\n                            },\n                            visible: {\n                                opacity: 1,\n                                y: 0\n                            }\n                        },\n                        className: \"p-6 bg-white rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold font-aboreto\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 mt-2 font-lora\",\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold mt-4 font-aboreto\",\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuSection;\nvar _c;\n$RefreshReg$(_c, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw2QkFBNkI7QUFDVTtBQUd2QyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPO0lBQ1Q7Q0FFRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE9BQU87NEJBQUVDLFVBQVU7d0JBQU07Ozs7OztrQ0FFM0IsOERBQUNDO3dCQUFHQyxJQUFHO3dCQUFnQk4sV0FBVTtrQ0FBMkM7Ozs7OztrQ0FHNUUsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxPQUFPOzRCQUFFQyxVQUFVO3dCQUFNOzs7Ozs7Ozs7Ozs7MEJBeUI3Qiw4REFBQ1gsaURBQU1BLENBQUNRLEdBQUc7Z0JBQ1RNLFNBQVE7Z0JBQ1JDLFNBQVE7Z0JBQ1JDLFlBQVk7b0JBQUVDLGlCQUFpQjtnQkFBSTtnQkFDbkNWLFdBQVU7MEJBRVROLFVBQVVpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDcEIsaURBQU1BLENBQUNRLEdBQUc7d0JBRVRhLFVBQVU7NEJBQ1JDLFFBQVE7Z0NBQUVDLFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUc7NEJBQzVCQyxTQUFTO2dDQUFFRixTQUFTO2dDQUFHQyxHQUFHOzRCQUFFO3dCQUM5Qjt3QkFDQWpCLFdBQVU7OzBDQUVWLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBdUNZLEtBQUtqQixJQUFJOzs7Ozs7MENBQzlELDhEQUFDd0I7Z0NBQUVuQixXQUFVOzBDQUFnQ1ksS0FBS2hCLFdBQVc7Ozs7OzswQ0FDN0QsOERBQUN1QjtnQ0FBRW5CLFdBQVU7MENBQXVDWSxLQUFLZixLQUFLOzs7Ozs7O3VCQVR6RGdCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpCO0tBN0R3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51U2VjdGlvbi50c3g/YmU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbi8vIGNvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkNsYXNzaWMgQnVyZ2VyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIGp1aWN5IGJlZWYgYnVyZ2VyIHdpdGggY2hlZXNlLCBsZXR0dWNlLCBhbmQgdG9tYXRvLlwiLFxyXG4gICAgcHJpY2U6IFwiJDEyLjk5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkdyaWxsZWQgQ2hpY2tlbiBTYWxhZFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTWl4ZWQgZ3JlZW5zLCBncmlsbGVkIGNoaWNrZW4sIGNoZXJyeSB0b21hdG9lcywgYW5kIHZpbmFpZ3JldHRlLlwiLFxyXG4gICAgcHJpY2U6IFwiJDEwLjk5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJvaWxlZCBDaGlja2VuIFNhbGFkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNaXhlZCBncmVlbnMsIGdyaWxsZWQgY2hpY2tlbiwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgdmluYWlncmV0dGUuXCIsXHJcbiAgICBwcmljZTogXCIkMTAuOTlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JpbGxlZCBNZWF0IFNhbGFkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNaXhlZCBncmVlbnMsIGdyaWxsZWQgY2hpY2tlbiwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgdmluYWlncmV0dGUuXCIsXHJcbiAgICBwcmljZTogXCIkMTAuOTlcIixcclxuICB9LFxyXG4gIC8vIE1vcmUgaXRlbXMuLi5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVTZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHAtMTIgYmctZ3JheS0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxoclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IGJvcmRlci10IGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCI3MCVcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgzIGlkPVwidGhpcmQtc2VjdGlvblwiIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1hYm9yZXRvIG14LTQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgIEZST00gVEhFIFNFQVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGhyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwJVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPG1vdGlvbi5kaXZcclxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBzdGFnZ2VyQ2hpbGRyZW46IDAuMyB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTggbWF4LXctNnhsIG14LWF1dG9cIlxyXG4gICAgICA+XHJcbiAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAyMCB9LFxyXG4gICAgICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtdC0yXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtdC00XCI+e2l0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L21vdGlvbi5kaXY+ICovfVxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcclxuICAgICAgICB0cmFuc2l0aW9uPXt7IHN0YWdnZXJDaGlsZHJlbjogMC4zIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCBtYXgtdy0zeGwgbXgtYXV0b1wiXHJcbiAgICAgID5cclxuICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXHJcbiAgICAgICAgICAgICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGZvbnQtYWJvcmV0b1wiPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtdC0yIGZvbnQtbG9yYVwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbXQtNCBmb250LWFib3JldG9cIj57aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJtZW51SXRlbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk1lbnVTZWN0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhyIiwic3R5bGUiLCJtYXhXaWR0aCIsImgzIiwiaWQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MenuSection.tsx\n"));

/***/ })

});