"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./blockChain/instance.js":
/*!********************************!*\
  !*** ./blockChain/instance.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectButton\": function() { return /* binding */ connectButton; },\n/* harmony export */   \"diConnectWallet\": function() { return /* binding */ diConnectWallet; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n// https://etherscan.io/address/0xcc1b5e2ac4D61cab2755287DB5fc3330F36E0687\n// function to Connect Wallet\nlet provider = null;\nconst connectButton = async ()=>{\n    const { ethereum  } = window;\n    if (ethereum.isMetaMask) {\n        provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(window.ethereum);\n        const accounts1 = await provider.send(\"eth_requestAccounts\", []);\n        const { name: name1 , chainId: chainId1  } = await provider.getNetwork();\n        var name = name1;\n        var chainId = chainId1;\n        var accounts = accounts1;\n        // var Balance = await provider.getBalance();\n        var balance = 0.0001;\n        // var Balance = (await provider.getBalance()).toString();\n        console.log(\"balance\", Balance);\n        return {\n            name: name1,\n            chainId: chainId1,\n            accounts: accounts1,\n            balance\n        };\n    } else {\n        return {\n            success: false,\n            msg: \"Install MetaMask\"\n        };\n    }\n};\n//  function to diConnect Wallet\nconst diConnectWallet = ()=>{\n    provider = null;\n    var name = \"\";\n    var chainId = \"\";\n    var accounts = \"\";\n    var Balance1 = 0;\n    return {\n        name,\n        chainId,\n        accounts,\n        Balance: Balance1\n    };\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja0NoYWluL2luc3RhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQywwRUFBMEU7QUFFMUUsNkJBQTZCO0FBQzdCLElBQUlDLFdBQVcsSUFBSTtBQUNuQixNQUFNQyxnQkFBZ0IsVUFBWTtJQUNoQyxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHQztJQUNyQixJQUFJRCxTQUFTRSxVQUFVLEVBQUU7UUFDdkJKLFdBQVcsSUFBSUQsaUVBQTZCLENBQUNJLE9BQU9ELFFBQVE7UUFDNUQsTUFBTUssWUFBVyxNQUFNUCxTQUFTUSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFFOUQsTUFBTSxFQUFFQyxNQUFBQSxNQUFJLEVBQUVDLFNBQUFBLFNBQU8sRUFBRSxHQUFHLE1BQU1WLFNBQVNXLFVBQVU7UUFFbkQsSUFBSUYsT0FBT0E7UUFDWCxJQUFJQyxVQUFVQTtRQUNkLElBQUlILFdBQVdBO1FBQ2YsNkNBQTZDO1FBQzdDLElBQUlLLFVBQVU7UUFDZCwwREFBMEQ7UUFDMURDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXQztRQUN2QixPQUFPO1lBQUVOLE1BQUFBO1lBQU1DLFNBQUFBO1lBQVNILFVBQUFBO1lBQVVLO1FBQVE7SUFDNUMsT0FBTztRQUNMLE9BQU87WUFBRUksU0FBUyxLQUFLO1lBQUVDLEtBQUs7UUFBbUI7SUFDbkQsQ0FBQztBQUNIO0FBRUEsZ0NBQWdDO0FBRWhDLE1BQU1DLGtCQUFrQixJQUFNO0lBQzVCbEIsV0FBVyxJQUFJO0lBQ2YsSUFBSVMsT0FBTztJQUNYLElBQUlDLFVBQVU7SUFDZCxJQUFJSCxXQUFXO0lBQ2YsSUFBSVEsV0FBVTtJQUNkLE9BQU87UUFBRU47UUFBTUM7UUFBU0g7UUFBVVEsU0FBQUE7SUFBUTtBQUM1QztBQUMwQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ibG9ja0NoYWluL2luc3RhbmNlLmpzP2RlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuLy8gaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weGNjMWI1ZTJhYzRENjFjYWIyNzU1Mjg3REI1ZmMzMzMwRjM2RTA2ODdcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIENvbm5lY3QgV2FsbGV0XHJcbmxldCBwcm92aWRlciA9IG51bGw7XHJcbmNvbnN0IGNvbm5lY3RCdXR0b24gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG4gIGlmIChldGhlcmV1bS5pc01ldGFNYXNrKSB7XHJcbiAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBjaGFpbklkIH0gPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XHJcblxyXG4gICAgdmFyIG5hbWUgPSBuYW1lO1xyXG4gICAgdmFyIGNoYWluSWQgPSBjaGFpbklkO1xyXG4gICAgdmFyIGFjY291bnRzID0gYWNjb3VudHM7XHJcbiAgICAvLyB2YXIgQmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoKTtcclxuICAgIHZhciBiYWxhbmNlID0gMC4wMDAxO1xyXG4gICAgLy8gdmFyIEJhbGFuY2UgPSAoYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZSgpKS50b1N0cmluZygpO1xyXG4gICAgY29uc29sZS5sb2coXCJiYWxhbmNlXCIsIEJhbGFuY2UpO1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgY2hhaW5JZCwgYWNjb3VudHMsIGJhbGFuY2UgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJJbnN0YWxsIE1ldGFNYXNrXCIgfTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAgZnVuY3Rpb24gdG8gZGlDb25uZWN0IFdhbGxldFxyXG5cclxuY29uc3QgZGlDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xyXG4gIHByb3ZpZGVyID0gbnVsbDtcclxuICB2YXIgbmFtZSA9IFwiXCI7XHJcbiAgdmFyIGNoYWluSWQgPSBcIlwiO1xyXG4gIHZhciBhY2NvdW50cyA9IFwiXCI7XHJcbiAgdmFyIEJhbGFuY2UgPSAwO1xyXG4gIHJldHVybiB7IG5hbWUsIGNoYWluSWQsIGFjY291bnRzLCBCYWxhbmNlIH07XHJcbn07XHJcbmV4cG9ydCB7IGNvbm5lY3RCdXR0b24sIGRpQ29ubmVjdFdhbGxldCB9O1xyXG4iXSwibmFtZXMiOlsiZXRoZXJzIiwicHJvdmlkZXIiLCJjb25uZWN0QnV0dG9uIiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJpc01ldGFNYXNrIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiYWNjb3VudHMiLCJzZW5kIiwibmFtZSIsImNoYWluSWQiLCJnZXROZXR3b3JrIiwiYmFsYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJCYWxhbmNlIiwic3VjY2VzcyIsIm1zZyIsImRpQ29ubmVjdFdhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blockChain/instance.js\n"));

/***/ })

});