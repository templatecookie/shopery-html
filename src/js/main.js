// Table Contents
'use strict';

/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
--------------------------------------------------
            ---------------------
              ----------------
    ==========  Table Contents ============
--------------------------------------------------
              -----------------
          ------------------------
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ \/\/\/\/\/\ 

 === Swipper Slider ==
 01. Banners 
 02. Shipping
 03. Categories 
 04. Products 
 05. Sale Cards 
 06. Deal Cards 
 07. Featured 
 08. News 
 09. Testimonials 
 10. Brands name 
 11. Members 
 12. Instagram
 
\/\/\/\/\/\/\/\*/

//====== Banners Slider ====== \\
var bannerOne = new Swiper('.banner-slider--one', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

var bannerTwo = new Swiper('.banner-slider--02', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

var bannerThree = new Swiper('.banner-slider--03', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

var bannerFour = new Swiper('.banner-slider--04', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
});

var bannerFive = new Swiper('.banner-slider--05', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
});

//====== Shipping Slider one ======\\
var shiping = new Swiper('.shipping-container--slider', {
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

//====== Categories ======\\
var categories = new Swiper('.popular-categories--slider', {
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

var categoryTwo = new Swiper('.category--top-slider--two', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//====== Shipping Slider one ======\\
var products = new Swiper('.popular-products--slider', {
  slidesPerView: 'auto',
  autoHeight: true,
  // centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

var productsTwo = new Swiper('.newest-products-slider--one', {
  spaceBetween: 22,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var productsContent = new Swiper('.our-products__content-slider', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

var productsContentOne = new Swiper('.our-products__content-slider-one', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

var productsContentTwo = new Swiper('.our-products__content-slider-two', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

var productsContentThree = new Swiper('.our-products__content-slider-three', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

var productsContentFour = new Swiper('.our-products__content-slider-four', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
  },
});

// ===== Sales Card ======= \\

var salesCard = new Swiper('.cyclone--slider', {
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

var salesCardOne = new Swiper('.sales-banner-slider--two', {
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

var salesCard = new Swiper('.banner-sales--slider', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

//======  deals Slider one ====== \\
var deals = new Swiper('.deals-products--slider', {
  slidesPerView: 'auto',
  autoHeight: true,
  // centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

//====== featured Sliders one ====== \\
var featured = new Swiper('.featured-slider--one', {
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var featuredTwo = new Swiper('.featured-slider--two', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var featuredThree = new Swiper('.featured-slider--three', {
  loop: true,
  loopFillGroupWithBlank: true,
  direction: 'vertical',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

var featuredFour = new Swiper('.featured-slider--four', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 5,
      spaceBetween: 22,
    },
  },
});

var featuredFive = new Swiper('.featured-slider--five', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// ====== News Slider one ====== \\
var news = new Swiper('.news-slider--one', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// ====== Testimonials ====== \\
var testimonialOne = new Swiper('.testimonial-slider--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
    },
  },
});

var testimonialThree = new Swiper('.testimonial-slider--three', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// ====== Instagram ====== \\
var insta = new Swiper('.instagram-slider--one', {
  slidesPerView: 6,
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1201: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//====== brands name ====== \\
var brandsName = new Swiper('.brand-name-slide--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 12,
    },

    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//====== Members ====== \\
var memebers = new Swiper('.members-slider--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
