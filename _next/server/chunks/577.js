"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 5825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const baseStyles = {
    solid: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
    outline: "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none"
};
const variantStyles = {
    solid: {
        slate: "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
        blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
        white: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
    },
    outline: {
        slate: "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
        white: "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
    }
};
function Button({ variant ="solid" , color ="slate" , className , href , ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(baseStyles[variant], variantStyles[variant][color], className);
    return href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 3208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 256 256",
                    ...props,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        fill: "#776dc5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M232 168v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 111.65 70.15 64.2 127.63 64A104 104 0 0 1 232 168Z",
                                opacity: ".2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M176 156a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm-84-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm148 24v24a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-22.87a113.38 113.38 0 0 1 35.4-82.41L26.34 61.66a8 8 0 0 1 11.32-11.32L63.82 76.5a111.4 111.4 0 0 1 128.55-.18l26-26a8 8 0 0 1 11.32 11.32L204.82 86.5c.75.71 1.5 1.43 2.24 2.17A111.25 111.25 0 0 1 240 168Zm-16 0a96 96 0 0 0-96-96h-.34C74.91 72.18 32 115.75 32 169.13V192h192Z"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                className: "h-10 text-md p-2 align-middle text-gray-800 font-semibold",
                children: "Dream Meanings"
            })
        ]
    });
}


/***/ })

};
;