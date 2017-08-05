/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_share_this__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_share_this___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_share_this__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_share_this_dist_sharers_twitter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_share_this_dist_sharers_twitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_share_this_dist_sharers_twitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_share_this_dist_sharers_facebook__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_share_this_dist_sharers_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_share_this_dist_sharers_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_share_this_dist_sharers_linked_in__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_share_this_dist_sharers_linked_in___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_share_this_dist_sharers_linked_in__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_share_this_dist_sharers_email__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_share_this_dist_sharers_email___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_share_this_dist_sharers_email__);






const selectionShare = __WEBPACK_IMPORTED_MODULE_0_share_this__({
  selector: 'body',
  sharers: [__WEBPACK_IMPORTED_MODULE_1_share_this_dist_sharers_twitter__, __WEBPACK_IMPORTED_MODULE_2_share_this_dist_sharers_facebook__, __WEBPACK_IMPORTED_MODULE_3_share_this_dist_sharers_linked_in__, __WEBPACK_IMPORTED_MODULE_4_share_this_dist_sharers_email__],
});

selectionShare.init();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ShareThis=t()}(this,function(){"use strict";function e(e){var t=e.document.body,n="static"===e.getComputedStyle(t).position?t.parentNode:t;return n.getBoundingClientRect()}function t(e,t){return h||(h=o(e)),e[h](t)}function n(e,n){for(var r=e;r&&(1!==r.nodeType||!t(r,n));)r=r.parentNode;return r}function r(e,t){var n=e.compareDocumentPosition(t);return!n||(16&n)>0}function o(e){for(var t="atchesSelector",n=["matches","m"+t,"webkitM"+t,"mozM"+t,"msM"+t,"oM"+t],r=0;r<n.length;r++){var o=n[r];if(e[o])return o}}function i(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.name===t)return r}}function a(e,t){if(t&&"object"===("undefined"==typeof t?"undefined":m(t)))for(var n in t)e[n]=t[n];return e}function c(e){return"function"==typeof e}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function f(e){if(e.isCollapsed)return!0;var t=e.anchorNode.compareDocumentPosition(e.focusNode);return t?(4&t)>0:e.anchorOffset<e.focusOffset}function l(e,t){var n=void 0,r=e.getClientRects(),o=[].slice.bind(r);if(t){for(var i=1/0,a=r.length;a--;){var c=r[a];if(c.left>i)break;i=c.left}n=o(a+1)}else{for(var f=-(1/0),l=0;l<r.length;l++){var s=r[l];if(s.right<f)break;f=s.right}n=o(0,l)}return{top:Math.min.apply(Math,u(n.map(function(e){return e.top}))),bottom:Math.max.apply(Math,u(n.map(function(e){return e.bottom}))),left:n[0].left,right:n[n.length-1].right}}function s(e,t){var o=e.cloneRange();if(e.collapsed||!t)return o;var i=n(e.startContainer,t);return i?r(i,e.endContainer)||o.setEnd(i,i.childNodes.length):(i=n(e.endContainer,t),i?o.setStart(i,0):o.collapse()),o}function d(t,n,r){var o=r.document,i=o.defaultView,a=i.getSelection(),c=f(a),u=l(n,c),s=e(i),d=t.style;c?d.right=o.documentElement.clientWidth-u.right+s.left+"px":d.left=u.left-s.left+"px",d.width=u.right-u.left+"px",d.height=u.bottom-u.top+"px",d.top=u.top-s.top+"px",d.position="absolute",t.className=r.popoverClass}function p(e,t){var r=n(t.target,"["+g+"]");if(r){var o=r.getAttribute(g),a=i(e,o);a&&c(a.action)&&a.action(t,r)}}function v(e){return{createPopover:function(){var t=e.createElement("div");return t.addEventListener("click",function(e){p(this.sharers,e)}),t},attachPopover:function(t){e.body.appendChild(t)},removePopover:function(e){var t=e.parentNode;t&&t.removeChild(e)}}}var h=void 0,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g="data-share-via",y=function(e,t,n,r){var o=e.shareUrl||e.document.defaultView.location;return"<ul>"+t.map(function(e){return'<li data-share-via="'+e.name+'">'+e.render.call(e,n,r,o)+"</li>"}).join("")+"</ul>"},b=void 0,C=["selectionchange","mouseup","touchend","touchcancel"],S=function(e){function t(e){g.addEventListener(e,o)}function n(e){g.removeEventListener(e,o)}function r(){E&&d(E,i(),p)}function o(e){var t=e.type,n="selectionchange"===t;!E!==n&&setTimeout(function(){var e=i();e?u(e):f()},10)}function i(){var e=S.getSelection(),t=e.rangeCount&&e.getRangeAt(0);if(t){var n=s(t,p.selector);if(!n.collapsed&&n.getClientRects().length)return n}}function u(e){var t=!E,n=e.toString(),r=p.transformer(n),o=p.sharers.filter(l.bind(null,r,n));return o.length?(t&&(E=M.createPopover()),E.sharers=o,E.innerHTML=y(p,o,r,n),d(E,e,p),void(t&&(M.attachPopover(E),c(p.onOpen)&&p.onOpen(E,r,n)))):void(E&&f())}function f(){E&&(M.removePopover(E),E=b,c(p.onClose)&&p.onClose())}function l(e,t,n){var r=n.active;return c(r)?r(e,t):r===b||r}var p=(Object.assign||a)({document:document,selector:"body",sharers:[],popoverClass:"share-this-popover",transformer:function(e){return e.trim().replace(/\s+/g," ")}},e||{}),h=!1,m=!1,g=b,S=b,E=b,M=b;return{init:function(){return!h&&(g=p.document,S=g.defaultView,S.getSelection?(C.forEach(t),S.addEventListener("resize",r),M=v(g),h=!0):(console.warn("share-this: Selection API isn't supported"),!1))},destroy:function(){return!(!h||m)&&(C.forEach(n),S.removeEventListener("resize",r),f(),g=b,S=b,m=!0)}}};return S});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ShareThisViaTwitter=e.ShareThisViaTwitter||{})}(this,function(e){"use strict";function t(e,t,n){var r=this.getText(e);return'<a href="'+this.getShareUrl(r,n)+'" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill="currentcolor"/></svg></a>'}function n(e){var t=e.trim();return t.length>i-2&&(t=t.slice(0,i-3).trim()+"…"),"“"+t+"”"}function r(e,t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent(e)+"&url="+encodeURIComponent(t)}function o(e,t){e.preventDefault(),t.ownerDocument.defaultView.open(t.firstChild.href,"share_via_twitter","height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640").opener=null}var i=120;e.render=t,e.getText=n,e.getShareUrl=r,e.action=o,e.name="twitter",Object.defineProperty(e,"__esModule",{value:!0})});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o(e.ShareThisViaFacebook=e.ShareThisViaFacebook||{})}(this,function(e){"use strict";function o(e,o,n){return'<a href="'+this.getShareUrl(e,n)+'" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="1.5 1.5 16 16"><path d="M8.546 16V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16" fill="currentcolor"/></svg></a>'}function n(e,o){return"https://www.facebook.com/sharer/sharer.php?quote="+encodeURIComponent(e)+"&u="+encodeURIComponent(o)}function t(e,o){e.preventDefault(),o.ownerDocument.defaultView.open(o.firstChild.href,"share_via_facebook","height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640").opener=null}e.render=o,e.getShareUrl=n,e.action=t,e.name="facebook",Object.defineProperty(e,"__esModule",{value:!0})});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.ShareThisViaLinkedIn=e.ShareThisViaLinkedIn||{})}(this,function(e){"use strict";function n(e,n,t){var r=this.getText(e);return'<a href="'+this.getShareUrl(r,t)+'" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635z" fill="currentcolor"/></svg></a>'}function t(e){var n=e.trim();return n.length>i-2&&(n=n.slice(0,i-3).trim()+"…"),"“"+n+"”"}function r(e,n){return"https://www.linkedin.com/shareArticle?mini=true&summary="+encodeURIComponent(e)+"&url="+encodeURIComponent(n)}function o(e,n){e.preventDefault(),n.ownerDocument.defaultView.open(n.firstChild.href,"share_via_linked_in","height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640").opener=null}var i=250;e.render=n,e.getText=t,e.getShareUrl=r,e.action=o,e.name="linked-in",Object.defineProperty(e,"__esModule",{value:!0})});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.ShareThisViaEmail=e.ShareThisViaEmail||{})}(this,function(e){"use strict";function n(e,n,o){return'<a href="'+this.getShareUrl(e,o)+'" target="_blank" rel="noopener nofollow noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -9 96 96"><path d="M1 12c-.553 0-1 .447-1 1v52c0 .553.447 1 1 1h76c.553 0 1-.447 1-1V13c0-.553-.447-1-1-1H1zm68.816 6L39 40.594 8.184 18h61.632zM72 60H6V23.84l29.452 21.593 3.548 2.6 3.548-2.6L72 23.838V60z" fill="currentcolor"/></svg></a>'}function o(e,n){return"mailto:?body="+encodeURIComponent(e)+"%0a%0a"+encodeURIComponent(n)}e.render=n,e.getShareUrl=o,e.name="email",Object.defineProperty(e,"__esModule",{value:!0})});

/***/ })
/******/ ]);