/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/404"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmigue%2FDesktop%2Fportfolio%2Fsrc%2Fpages%2F404.js&page=%2F404!":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmigue%2FDesktop%2Fportfolio%2Fsrc%2Fpages%2F404.js&page=%2F404! ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/404\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/404.js */ \"./src/pages/404.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/404\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1pZ3VlJTJGRGVza3RvcCUyRnBvcnRmb2xpbyUyRnNyYyUyRnBhZ2VzJTJGNDA0LmpzJnBhZ2U9JTJGNDA0ISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhDQUFvQjtBQUMzQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ODUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiLzQwNFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzLzQwNC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvNDA0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmigue%2FDesktop%2Fportfolio%2Fsrc%2Fpages%2F404.js&page=%2F404!\n"));

/***/ }),

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst quote = {\n    hidden: {\n        opacity: 1\n    },\n    visible: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text, className = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-2 w-full mx-auto flex flex-col items-center justify-center  text-center     overflow-hidden sm:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block text-dark dark:text-light\\n      text-8xl font-bold w-full capitalize  \".concat(className, \" xl:text-6xl\"),\n            variants: quote,\n            initial: \"hidden\",\n            animate: \"visible\",\n            children: text.split(\" \").map((char, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        char,\n                        \"\\xa0\"\n                    ]\n                }, char + \"-\" + index, true, {\n                    fileName: \"/Users/migue/Desktop/portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/migue/Desktop/portfolio/src/components/AnimatedText.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/migue/Desktop/portfolio/src/components/AnimatedText.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLE1BQU1FLFFBQVE7SUFDWkMsUUFBUTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQRCxTQUFTO1FBQ1RFLFlBQVk7WUFDVkMsT0FBTztZQUNQQyxpQkFBaUI7UUFDbkI7SUFDRjtBQUNGO0FBRUEsTUFBTUMsYUFBYTtJQUNqQk4sUUFBUTtRQUNOQyxTQUFTO1FBQ1RNLEdBQUc7SUFDTDtJQUNBTCxTQUFTO1FBQ1BELFNBQVM7UUFDVE0sR0FBRztRQUNISixZQUFZO1lBQ1ZLLFVBQVU7UUFDWjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxlQUFlO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUUsRUFBRTtJQUM1QyxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFFYiw0RUFBQ2QsaURBQU1BLENBQUNnQixFQUFFO1lBQ1JGLFdBQVcsdUZBQ3FDLE9BQVZBLFdBQVU7WUFDaERHLFVBQVVmO1lBQ1ZnQixTQUFRO1lBQ1JDLFNBQVE7c0JBRVBOLEtBQUtPLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQzFCLHFCQUNFLDhEQUFDdkIsaURBQU1BLENBQUN3QixJQUFJO29CQUNWVixXQUFVO29CQUVWRyxVQUFVUjs7d0JBRVRhO3dCQUFLOzttQkFIREEsT0FBTyxNQUFNQzs7Ozs7WUFNeEI7Ozs7Ozs7Ozs7O0FBSVI7S0F6Qk1YO0FBMkJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGV4dC5qcz80YzE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHF1b3RlID0ge1xyXG4gIGhpZGRlbjoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG4gIHZpc2libGU6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4wOCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNpbmdsZVdvcmQgPSB7XHJcbiAgaGlkZGVuOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgeTogNTAsXHJcbiAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlZFRleHQgPSAoeyB0ZXh0LCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHctZnVsbCBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICB0ZXh0LWNlbnRlciAgXHJcbiAgICBvdmVyZmxvdy1oaWRkZW4gc206cHktMFwiPlxyXG4gICAgICA8bW90aW9uLmgxXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHRleHQtZGFyayBkYXJrOnRleHQtbGlnaHRcclxuICAgICAgdGV4dC04eGwgZm9udC1ib2xkIHctZnVsbCBjYXBpdGFsaXplICAke2NsYXNzTmFtZX0geGw6dGV4dC02eGxgfVxyXG4gICAgICAgIHZhcmlhbnRzPXtxdW90ZX1cclxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7dGV4dC5zcGxpdChcIiBcIikubWFwKChjaGFyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICBrZXk9e2NoYXIgKyBcIi1cIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtzaW5nbGVXb3JkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoYXJ9Jm5ic3A7XHJcbiAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L21vdGlvbi5oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZFRleHQ7XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInF1b3RlIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzaW5nbGVXb3JkIiwieSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInNwbGl0IiwibWFwIiwiY2hhciIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ }),

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst TransitionEffect = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width: [\n                        \"0%\",\n                        \"100%\"\n                    ]\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/components/TransitionEffect.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = TransitionEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionEffect);\nvar _c;\n$RefreshReg$(_c, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDYjtBQUUxQixNQUFNRSxtQkFBbUI7SUFDdkIscUJBQ0U7OzBCQUNFLDhEQUFDRixpREFBTUEsQ0FBQ0csR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsR0FBRztvQkFBUUMsT0FBTztnQkFBTztnQkFDcENDLFNBQVM7b0JBQUVGLEdBQUU7b0JBQU1DLE9BQU07Z0JBQUs7Z0JBQzlCRSxNQUFNO29CQUFDSCxHQUFFO3dCQUFDO3dCQUFNO3FCQUFPO29CQUFFQyxPQUFNO3dCQUFDO3dCQUFLO3FCQUFPO2dCQUFBO2dCQUM1Q0csWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUVqRCw4REFBQ1osaURBQU1BLENBQUNHLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUU3RCw4REFBQ1osaURBQU1BLENBQUNHLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7Ozs7QUFJbkU7S0F4Qk1WO0FBMEJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHJhbnNpdGlvbkVmZmVjdC5qcz8xNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRyYW5zaXRpb25FZmZlY3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTMwIGJnLXByaW1hcnlcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgeDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeDpcIjAlXCIsIHdpZHRoOlwiMCVcIiB9fVxyXG4gICAgICAgIGV4aXQ9e3t4OltcIjAlXCIsIFwiMTAwJVwiXSwgd2lkdGg6W1wiMCVcIixcIjEwMCVcIl19fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0yMCBiZy1saWdodCBkYXJrOmJnLWRhcmtcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgeDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeDogXCIwJVwiLCB3aWR0aDogXCIwJVwiIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yLCBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJbk91dFwiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTEwIGJnLWRhcmsgZGFyazpiZy1saWdodFwiXHJcbiAgICAgICAgaW5pdGlhbD17eyB4OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyB4OiBcIjAlXCIsIHdpZHRoOiBcIjAlXCIgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjQsIGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiZWFzZUluT3V0XCIgfX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRWZmZWN0O1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJUcmFuc2l0aW9uRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIngiLCJ3aWR0aCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n"));

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _components_TransitionEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TransitionEffect */ \"./src/components/TransitionEffect.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst NotFound = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Awesome Portfolio Built with Nextjs | 404 Page \"\n                    }, void 0, false, {\n                        fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Explore CodeBucks's Next.js developer portfolio and    discover the latest webapp projects and software engineering articles.    Showcase your skills as a full-stack developer and software engineer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"h-[75vh] w-full dark:bg-dark \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"relative !bg-transparent !pt-16 flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"404\",\n                            className: \" \"\n                        }, void 0, false, {\n                            fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Page Not Found.\",\n                            className: \" !text-7xl \"\n                        }, void 0, false, {\n                            fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/\",\n                            className: \"self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2   font-semibold text-light hover:border-dark hover:bg-light hover:text-dark    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light   \",\n                            children: \"Go To Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/migue/Desktop/portfolio/src/pages/404.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = NotFound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\nvar _c;\n$RefreshReg$(_c, \"NotFound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWjtBQUNvQjtBQUNoQztBQUNBO0FBQ0g7QUFFMUIsTUFBTU0sV0FBVztJQUNmLHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ0k7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFLWiw4REFBQ1Isb0VBQWdCQTs7Ozs7MEJBQ2pCLDhEQUFDUztnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ1gsMERBQU1BO29CQUFDVyxXQUFVOztzQ0FDaEIsOERBQUNaLGdFQUFZQTs0QkFBQ2EsTUFBSzs0QkFBTUQsV0FBVTs7Ozs7O3NDQUNuQyw4REFBQ1osZ0VBQVlBOzRCQUNYYSxNQUFLOzRCQUNMRCxXQUFVOzs7Ozs7c0NBRVosOERBQUNSLGtEQUFJQTs0QkFDSFUsTUFBSzs0QkFDTEYsV0FBVTtzQ0FJWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0tBakNNTjtBQW1DTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvNDA0LmpzPzc1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBUcmFuc2l0aW9uRWZmZWN0IGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNpdGlvbkVmZmVjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Bd2Vzb21lIFBvcnRmb2xpbyBCdWlsdCB3aXRoIE5leHRqcyB8IDQwNCBQYWdlIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiRXhwbG9yZSBDb2RlQnVja3MncyBOZXh0LmpzIGRldmVsb3BlciBwb3J0Zm9saW8gYW5kIFxyXG4gICAgICAgIGRpc2NvdmVyIHRoZSBsYXRlc3Qgd2ViYXBwIHByb2plY3RzIGFuZCBzb2Z0d2FyZSBlbmdpbmVlcmluZyBhcnRpY2xlcy4gXHJcbiAgICAgICAgU2hvd2Nhc2UgeW91ciBza2lsbHMgYXMgYSBmdWxsLXN0YWNrIGRldmVsb3BlciBhbmQgc29mdHdhcmUgZW5naW5lZXIuXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUcmFuc2l0aW9uRWZmZWN0IC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImgtWzc1dmhdIHctZnVsbCBkYXJrOmJnLWRhcmsgXCI+XHJcbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJyZWxhdGl2ZSAhYmctdHJhbnNwYXJlbnQgIXB0LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCI0MDRcIiBjbGFzc05hbWU9XCIgXCIgLz5cclxuICAgICAgICAgIDxBbmltYXRlZFRleHRcclxuICAgICAgICAgICAgdGV4dD1cIlBhZ2UgTm90IEZvdW5kLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiAhdGV4dC03eGwgXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyICFtdC00IGlubGluZS1ibG9jayByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zb2xpZCBiZy1kYXJrIHB4LTQgcHktMlxyXG4gICAgICAgIGZvbnQtc2VtaWJvbGQgdGV4dC1saWdodCBob3Zlcjpib3JkZXItZGFyayBob3ZlcjpiZy1saWdodCBob3Zlcjp0ZXh0LWRhcmsgXHJcbiAgICAgICAgZGFyazpiZy1saWdodCBkYXJrOnRleHQtZGFyayBob3ZlcjpkYXJrOmJnLWRhcmsgaG92ZXI6ZGFyazp0ZXh0LWxpZ2h0IGhvdmVyOmRhcms6Ym9yZGVyLWxpZ2h0XHJcbiAgICAgICAgXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR28gVG8gSG9tZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XHJcbiJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJUcmFuc2l0aW9uRWZmZWN0IiwiSGVhZCIsIkxpbmsiLCJSZWFjdCIsIk5vdEZvdW5kIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmigue%2FDesktop%2Fportfolio%2Fsrc%2Fpages%2F404.js&page=%2F404!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);