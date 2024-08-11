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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// components/MenuSection.tsx\n\nconst menuItems = [\n    {\n        name: \"Classic Burger\",\n        description: \"A juicy beef burger with cheese, lettuce, and tomato.\",\n        price: \"$12.99\"\n    },\n    {\n        name: \"Grilled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Boiled Chicken Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    },\n    {\n        name: \"Grilled Meat Salad\",\n        description: \"Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.\",\n        price: \"$10.99\"\n    }\n];\nfunction MenuSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col gap-3 p-12 bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"flex-grow border-t border-gray-300\",\n                        style: {\n                            maxWidth: \"70%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        id: \"third-section\",\n                        className: \"font-semibold font-verdana mx-4 text-2xl\",\n                        children: \"FROM THE SEA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-cols-1 md:grid-cols-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                        initial: \"hidden\",\n                        animate: \"visible\",\n                        transition: {\n                            staggerChildren: 0.3\n                        },\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto bg-red-600\",\n                        children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                                variants: {\n                                    hidden: {\n                                        opacity: 0,\n                                        y: 20\n                                    },\n                                    visible: {\n                                        opacity: 1,\n                                        y: 0\n                                    }\n                                },\n                                className: \"p-6 bg-white rounded-lg shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-semibold font-aboreto\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700 mt-2 font-lora\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-bold mt-4 font-aboreto\",\n                                        children: item.price\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"2222\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Teke\\\\Desktop\\\\lalumierdouce-restaurant.demowebsite\\\\components\\\\MenuSection.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = MenuSection;\nvar _c;\n$RefreshReg$(_c, \"MenuSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw2QkFBNkI7QUFDVTtBQUd2QyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPO0lBQ1Q7Q0FFRDtBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE9BQU87NEJBQUVDLFVBQVU7d0JBQU07Ozs7OztrQ0FFM0IsOERBQUNDO3dCQUNDQyxJQUFHO3dCQUNITixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1AsaURBQU1BLENBQUNRLEdBQUc7d0JBQ1RNLFNBQVE7d0JBQ1JDLFNBQVE7d0JBQ1JDLFlBQVk7NEJBQUVDLGlCQUFpQjt3QkFBSTt3QkFDbkNWLFdBQVU7a0NBRVROLFVBQVVpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3BCLDhEQUFDcEIsaURBQU1BLENBQUNRLEdBQUc7Z0NBRVRhLFVBQVU7b0NBQ1JDLFFBQVE7d0NBQUVDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUc7b0NBQzVCQyxTQUFTO3dDQUFFRixTQUFTO3dDQUFHQyxHQUFHO29DQUFFO2dDQUM5QjtnQ0FDQWpCLFdBQVU7O2tEQUVWLDhEQUFDSzt3Q0FBR0wsV0FBVTtrREFDWFksS0FBS2pCLElBQUk7Ozs7OztrREFFWiw4REFBQ3dCO3dDQUFFbkIsV0FBVTtrREFBZ0NZLEtBQUtoQixXQUFXOzs7Ozs7a0RBQzdELDhEQUFDdUI7d0NBQUVuQixXQUFVO2tEQUNWWSxLQUFLZixLQUFLOzs7Ozs7OytCQVpSZ0I7Ozs7Ozs7Ozs7a0NBaUJYLDhEQUFDWjtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7S0E3Q3dCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnVTZWN0aW9uLnRzeD9iZTdmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuLy8gY29tcG9uZW50cy9NZW51U2VjdGlvbi50c3hcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2xhc3NpYyBCdXJnZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEganVpY3kgYmVlZiBidXJnZXIgd2l0aCBjaGVlc2UsIGxldHR1Y2UsIGFuZCB0b21hdG8uXCIsXHJcbiAgICBwcmljZTogXCIkMTIuOTlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR3JpbGxlZCBDaGlja2VuIFNhbGFkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNaXhlZCBncmVlbnMsIGdyaWxsZWQgY2hpY2tlbiwgY2hlcnJ5IHRvbWF0b2VzLCBhbmQgdmluYWlncmV0dGUuXCIsXHJcbiAgICBwcmljZTogXCIkMTAuOTlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQm9pbGVkIENoaWNrZW4gU2FsYWRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1peGVkIGdyZWVucywgZ3JpbGxlZCBjaGlja2VuLCBjaGVycnkgdG9tYXRvZXMsIGFuZCB2aW5haWdyZXR0ZS5cIixcclxuICAgIHByaWNlOiBcIiQxMC45OVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHcmlsbGVkIE1lYXQgU2FsYWRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1peGVkIGdyZWVucywgZ3JpbGxlZCBjaGlja2VuLCBjaGVycnkgdG9tYXRvZXMsIGFuZCB2aW5haWdyZXR0ZS5cIixcclxuICAgIHByaWNlOiBcIiQxMC45OVwiLFxyXG4gIH0sXHJcbiAgLy8gTW9yZSBpdGVtcy4uLlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudVNlY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcC0xMiBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGhyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwJVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIGlkPVwidGhpcmQtc2VjdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGZvbnQtdmVyZGFuYSBteC00IHRleHQtMnhsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBGUk9NIFRIRSBTRUFcclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMVwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgc3RhZ2dlckNoaWxkcmVuOiAwLjMgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQgbWF4LXctMnhsIG14LWF1dG8gYmctcmVkLTYwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBmb250LWFib3JldG9cIj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG10LTIgZm9udC1sb3JhXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG10LTQgZm9udC1hYm9yZXRvXCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8ZGl2PjIyMjI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwibWVudUl0ZW1zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJNZW51U2VjdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJociIsInN0eWxlIiwibWF4V2lkdGgiLCJoMyIsImlkIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibWFwIiwiaXRlbSIsImluZGV4IiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MenuSection.tsx\n"));

/***/ })

});