// Table Contents
'use strict';

// Swipper Slier
//  ** Homepage
/*\ 

==========  Table Contents ============

 === Swipper Slider ==

 => Homepage 01 - Shipping Cards


\*/

// Banner Slider
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
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //   },
  // },
});

// Shipping Slider one
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

// Categories
var categories = new Swiper('.popular-categories--slider', {
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 0,
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
    575: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// Shipping Slider one
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

// Sales Card
var salesCard = new Swiper('.cyclone--slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
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

// deals Slider one
var deals = new Swiper('.deals-products--slider', {
  slidesPerView: 'auto',
  autoHeight: true,
  // centeredSlides: true,
  spaceBetween: 15,
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
  },
});

// featured Slider one
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

// News Slider one
var news = new Swiper('.news-slider--one', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
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
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
