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
/***/ (function(module, exports) {

eval("// Table Contents\n\n/*\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\\r\n--------------------------------------------------\r\n            ---------------------\r\n              ----------------\r\n    ==========  Table Contents ============\r\n--------------------------------------------------\r\n              -----------------\r\n          ------------------------\r\n          \r\n === Swipper Slider ==\r\n 01. Banners \r\n 02. Shipping\r\n 03. Categories \r\n 04. Products \r\n 06. Deal Cards \r\n 07. Featured \r\n 08. News \r\n 09. Testimonials \r\n 10. Brands name \r\n 11. Members \r\n 12. Instagram\r\n 13.Blogs-list\r\n 14.Shops\r\n\r\n */\n//\nvar preloader = document.querySelector('.loader');\nwindow.addEventListener('load', function (event) {\n  preloader.style.display = 'none';\n});\nnewsletterModal = document.getElementById('newsletter');\n\nif (newsletterModal) {\n  var newsletterModal = new bootstrap.Modal(newsletterModal);\n  newsletterModal.show();\n} //  Header navigation Sidebar\n\n\nvar closeBar = document.querySelector('.header__cross');\nvar mobileSidebar = document.querySelector('.header__sidebar');\nvar menuBtn = document.querySelector('.header__sidebar-btn');\nvar body = document.querySelector('body'); // Open\n\nmenuBtn.addEventListener('click', function () {\n  mobileSidebar.classList.add('active');\n  body.classList.add('overlay');\n}); // close\n\ncloseBar.addEventListener('click', function () {\n  mobileSidebar.classList.remove('active');\n  body.classList.remove('overlay');\n});\nvar navMenu = [].slice.call(document.querySelectorAll('.header__mobile-menu-item'));\n\nfor (var y = 0; y < navMenu.length; y++) {\n  navMenu[y].addEventListener('click', function () {\n    menuClick(this);\n  });\n}\n\nfunction menuClick(current) {\n  var active = current.classList.contains('active');\n  navMenu.forEach(function (el) {\n    return el.classList.remove('active');\n  });\n\n  if (active) {\n    current.classList.remove('active');\n  } else {\n    current.classList.add('active');\n  }\n} // Shoping Cart\n// Cart\n\n\nvar cartBtn = document.querySelector('.cart-bag');\nvar closeBtn = document.querySelector('.shopping-cart .close');\nvar shoppingCart = document.querySelector('.shopping-cart'); // Event Click Popup cart open\n\ncartBtn.addEventListener('click', function () {\n  var body = document.querySelector('body');\n  body.classList.add('overlay');\n  shoppingCart.classList.add('active');\n}); // Event Click Popup Close\n\ncloseBtn.addEventListener('click', function () {\n  var body = document.querySelector('body');\n  body.classList.remove('overlay');\n  shoppingCart.classList.remove('active');\n}); //====== Banners Slider ====== \\\\\n\nvar bannerOne = new Swiper('.banner-slider--one', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  }\n});\nvar bannerTwo = new Swiper('.banner-slider--02', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  }\n});\nvar bannerThree = new Swiper('.banner-slider--03', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  }\n});\nvar bannerFour = new Swiper('.banner-slider--04', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: ' .swiper-button--next',\n    prevEl: ' .swiper-button--prev'\n  }\n});\nvar bannerFive = new Swiper('.banner-slider--05', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  effect: 'fade',\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: ' .swiper-button--next',\n    prevEl: ' .swiper-button--prev'\n  }\n}); //====== Shipping Slider one ======\\\\\n//====== Categories ======\\\\\n\nvar categories = new Swiper('.popular-categories--slider', {\n  slidesPerView: 1,\n  spaceBetween: 0,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2,\n      spaceBetween: 15\n    }\n  }\n});\nvar categoryTwo = new Swiper('.category--top-slider--two', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  navigation: {\n    nextEl: ' .swiper-button--next',\n    prevEl: ' .swiper-button--prev'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 15\n    },\n    575: {\n      slidesPerView: 2\n    },\n    767: {\n      slidesPerView: 3\n    },\n    992: {\n      slidesPerView: 4\n    },\n    1200: {\n      slidesPerView: 6,\n      spaceBetween: 24\n    }\n  }\n}); //====== Shipping Slider one ======\\\\\n\nvar products = new Swiper('.popular-products--slider', {\n  slidesPerView: 'auto',\n  autoHeight: true,\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productsTwo = new Swiper('.newest-products-slider--one', {\n  spaceBetween: 22,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1200: {\n      slidesPerView: 5\n    }\n  }\n});\nvar productsContent = new Swiper('.our-products__content-slider', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productsContentOne = new Swiper('.our-products__content-slider-one', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productsContentTwo = new Swiper('.our-products__content-slider-two', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productsContentThree = new Swiper('.our-products__content-slider-three', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productsContentFour = new Swiper('.our-products__content-slider-four', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    575: {\n      slidesPerView: 2\n    }\n  }\n});\nvar productViewThumbs = new Swiper('.gallery-items-slider', {\n  centeredSlides: true,\n  slidesPerView: 4,\n  loop: true,\n  autoHeight: false,\n  direction: 'vertical',\n  navigation: {\n    nextEl: '.gallery-next-item',\n    prevEl: '.gallery-prev-item'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 2,\n      centeredSlides: false,\n      direction: 'horizontal'\n    },\n    570: {\n      slidesPerView: 4,\n      centeredSlides: false,\n      direction: 'horizontal'\n    },\n    992: {\n      slidesPerView: 4,\n      centeredSlides: false\n    }\n  }\n});\n$('.gallery-item').on('click', function () {\n  $('.gallery-item.active').removeClass('active');\n  $(this).addClass('active');\n  var element = $(this).find('img');\n\n  if (element) {\n    var imgSource = element.attr('src');\n    $('.product-main-image').attr('src', imgSource);\n  }\n});\nvar galleryThumbs = new Swiper('.gallery-thumbs', {\n  centeredSlides: true,\n  centeredSlidesBounds: true,\n  slidesPerView: 4,\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  direction: 'vertical',\n  breakpoints: {\n    0: {\n      slidesPerView: 3\n    },\n    768: {\n      slidesPerView: 4\n    }\n  }\n});\nvar galleryMain = new Swiper('.gallery-main', {\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  preventInteractionOnTransition: true,\n  navigation: {\n    nextEl: '.swiper-button-next-item',\n    prevEl: '.swiper-button-prev-item'\n  },\n  effect: 'fade',\n  fadeEffect: {\n    crossFade: true\n  },\n  thumbs: {\n    swiper: galleryThumbs\n  }\n});\nvar productViewThumbs = new Swiper('.gallery-thumbs-slider', {\n  centeredSlides: true,\n  centeredSlidesBounds: true,\n  slidesPerView: 4,\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  direction: 'vertical',\n  breakpoints: {\n    0: {\n      slidesPerView: 3\n    },\n    992: {\n      slidesPerView: 4\n    }\n  }\n});\nvar productViewGallery = new Swiper('.gallery-main-slider', {\n  watchOverflow: true,\n  watchSlidesVisibility: true,\n  watchSlidesProgress: true,\n  preventInteractionOnTransition: true,\n  navigation: {\n    nextEl: '.swiper-button-next-item',\n    prevEl: '.swiper-button-prev-item'\n  },\n  effect: 'fade',\n  fadeEffect: {\n    crossFade: true\n  },\n  thumbs: {\n    swiper: productViewThumbs\n  }\n}); //======  deals Slider one ====== \\\\\n\nvar deals = new Swiper('.deals-products--slider', {\n  slidesPerView: 'auto',\n  autoHeight: true,\n  // centeredSlides: true,\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    }\n  }\n}); //====== featured Sliders one ====== \\\\\n\nvar featured = new Swiper('.featured-slider--one', {\n  spaceBetween: 0,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1200: {\n      slidesPerView: 5\n    }\n  }\n});\nvar featuredFive = new Swiper('.featured-slider--five', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 15\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1201: {\n      slidesPerView: 4,\n      spaceBetween: 24\n    }\n  }\n});\nvar featured = new Swiper('.related-slider--one', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1\n    },\n    480: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    1200: {\n      slidesPerView: 4\n    }\n  }\n});\nvar featured = new Swiper('.our-feature--slider', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  // centeredSlides: true,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 24\n    }\n  }\n}); // ====== News Slider one ====== \\\\\n\nvar news = new Swiper('.news-slider--one', {\n  spaceBetween: 24,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1200: {\n      slidesPerView: 3\n    }\n  }\n}); // ====== Testimonials ====== \\\\\n\nvar testimonialOne = new Swiper('.testimonial-slider--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  navigation: {\n    nextEl: ' .btn--next',\n    prevEl: ' .btn--prev'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12,\n      centeredSlides: false\n    },\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 12\n    },\n    1200: {\n      slidesPerView: 3,\n      spaceBetween: 24,\n      centeredSlides: true\n    }\n  }\n});\nvar testimonialThree = new Swiper('.testimonial-slider--three', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  navigation: {\n    nextEl: ' .swiper-button--next',\n    prevEl: ' .swiper-button--prev'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1200: {\n      slidesPerView: 3,\n      spaceBetween: 24\n    }\n  }\n}); // ====== Instagram ====== \\\\\n\nvar insta = new Swiper('.instagram-slider--one', {\n  slidesPerView: 6,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    575: {\n      slidesPerView: 2\n    },\n    768: {\n      slidesPerView: 3\n    },\n    992: {\n      slidesPerView: 4\n    },\n    1201: {\n      slidesPerView: 6,\n      spaceBetween: 24\n    }\n  }\n}); //====== brands name ====== \\\\\n\nvar brandsName = new Swiper('.brand-name-slide--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoHeight: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 12\n    },\n    420: {\n      slidesPerView: 3,\n      spaceBetween: 12\n    },\n    768: {\n      slidesPerView: 4\n    },\n    1200: {\n      slidesPerView: 6,\n      spaceBetween: 24\n    }\n  }\n}); //====== Members ====== \\\\\n\nvar memebers = new Swiper('.members-slider--one', {\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  },\n  navigation: {\n    nextEl: ' .arrows__btn-prev ',\n    prevEl: ' .arrows__btn-next'\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 1,\n      spaceBetween: 15\n    },\n    768: {\n      slidesPerView: 2\n    },\n    1201: {\n      slidesPerView: 4,\n      spaceBetween: 24\n    }\n  }\n}); // Blogs\n\nvar blogs = new Swiper('.blog-list--slider', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  }\n}); // Shops\n\nvar shops = new Swiper('.shop-slider--one', {\n  spaceBetween: 15,\n  loop: true,\n  loopFillGroupWithBlank: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n    dynamicBullets: true\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

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