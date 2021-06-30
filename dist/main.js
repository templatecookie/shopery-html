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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Table Contents\n // Swipper Slier\n//  ** Homepage\n\n/*\\ \r\n\r\n==========  Table Contents ============\r\n\r\n === Swipper Slider ==\r\n\r\n => Homepage 01 - Shipping Cards\r\n\r\n\r\n\\*/\n// Banner Slider\n\nvar bannerOne = new Swiper('.banner-slider--one', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  }\n}); // Shipping Slider one\n\nvar shiping = new Swiper('.shipping-container--slider', {\n  spaceBetween: 0,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1200: {\n      slidesPerView: 4\n    }\n  }\n}); // Categories\n\nvar categories = new Swiper('.popular-categories--slider', {\n  slidesPerView: 1,\n  // centeredSlides: true,\n  spaceBetween: 0,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  // autoplay: {\n  //   delay: 2500,\n  //   disableOnInteraction: false,\n  // },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2,\n      spaceBetween: 15\n    }\n  }\n}); // Shipping Slider one\n\nvar products = new Swiper('.popular-products--slider', {\n  slidesPerView: 'auto',\n  autoHeight: true,\n  // centeredSlides: true,\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n}); // Sales Card\n\nvar salesCard = new Swiper('.cyclone--slider', {\n  slidesPerView: 'auto',\n  centeredSlides: true,\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    }\n  }\n}); // deals Slider one\n\nvar deals = new Swiper('.deals-products--slider', {\n  slidesPerView: 'auto',\n  autoHeight: true,\n  // centeredSlides: true,\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  // autoplay: {\n  //   delay: 2500,\n  //   disableOnInteraction: false,\n  // },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    }\n  }\n}); // featured Slider one\n\nvar featured = new Swiper('.featured-slider--one', {\n  spaceBetween: 0,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1200: {\n      slidesPerView: 5\n    }\n  }\n});\nvar featured = new Swiper('.featured-slider--two', {\n  spaceBetween: 12,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1200: {\n      slidesPerView: 4\n    }\n  }\n}); // News Slider one\n\nvar news = new Swiper('.news-slider--one', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1200: {\n      slidesPerView: 3\n    }\n  }\n}); // Testimonials\n\nvar testimonialOne = new Swiper('.testimonial-slider--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  navigation: {\n    nextEl: ' .swiper-button--next',\n    prevEl: ' .swiper-button--prev'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1200: {\n      slidesPerView: 3,\n      spaceBetween: 24\n    }\n  }\n}); // Testimonials\n\nvar insta = new Swiper('.instagram-slider--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    420: {\n      slidesPerView: 3,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 4\n    },\n    1200: {\n      slidesPerView: 6,\n      spaceBetween: 24\n    }\n  }\n}); // brands name\n\nvar brandsName = new Swiper('.brand-name-slide--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 2500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    420: {\n      slidesPerView: 3,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 4\n    },\n    1200: {\n      slidesPerView: 6,\n      spaceBetween: 24\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/main.scss?");

/***/ })

/******/ });