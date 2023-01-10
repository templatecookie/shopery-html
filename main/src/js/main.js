/*

Table Contents
==============================
    1. Countdown timer
    2. Stirct Mode
    3. BVSelect Plugin
    4. Loader
    5. Newsletter Modal
    6. Menu
    7. Shopping Cart 
    8. Product Image Change
    9. Cart Quantity
    10. Products Filter
    11. Range Slider
    12. Lightbox Plugin
    13. Swiper Slider
    14. Filter
        14.1    Filter Sidebar
        14.2    Blog Sidebar Filter
        14.3    Shop Sidebar Filter 
    15. Password Show/Hide
    16. Slider
        16.1    Banner Slider
        16.2    Categories Slider
        16.3    Products Slider
        16.4    Gallery Slider
        16.5    Deals Slider
        16.6    Featured Sliders
        16.7    News Slider
        16.8    Testimonial Slider
        16.9    Instagram Slider
        16.10   Brands Slider
        16.11   Member Slider
        16.12   Blog Post Slider

 */

/* 
    1. Countdown timer
======================== */
if (document.getElementById('countdownTwo')) {
  $('#countdownTwo').syotimer({
    year: 2021,
    month: 9,
    day: 30,
    hour: 20,
    minute: 30,
  });
}

if (document.getElementById('countdown')) {
  $('#countdown').syotimer({
    year: 2023,
    month: 09,
    day: 06,
    hour: 20,
    minute: 30,
  });
}

/* 
    2. Stirct Mode
======================== */
('use strict');

/* 
    3. BVSelect Plugin
======================== */
if (document.getElementById('selectbox1')) {
  var demo1 = new BVSelect({
    selector: '#selectbox1',
    searchbox: false,
    offset: false,
    placeholder: 'Eng',
  });
}

if (document.getElementById('selectbox2')) {
  var demo2 = new BVSelect({
    selector: '#selectbox2',
    searchbox: false,
    offset: false,
    placeholder: 'USD',
  });
}

if (document.getElementById('sort')) {
  var demo3 = new BVSelect({
    selector: '#sort',
    searchbox: false,
    offset: false,
    placeholder: 'Latest',
  });
}

if (document.getElementById('country')) {
  var country = new BVSelect({
    selector: '#country',
    searchbox: false,
    offset: false,
    placeholder: 'Select',
  });
}

if (document.getElementById('states')) {
  var states = new BVSelect({
    selector: '#states',
    searchbox: false,
    offset: false,
    placeholder: 'Selects',
  });
}

if (document.getElementById('zip')) {
  var zip = new BVSelect({
    selector: '#zip',
    searchbox: false,
    offset: false,
    placeholder: 'Zip Code',
  });
}

if (document.getElementById('category')) {
  var category = new BVSelect({
    selector: '#category',
    searchbox: false,
    offset: false,
    placeholder: 'Select Catecory',
  });
}

if (document.getElementById('price')) {
  var price = new BVSelect({
    selector: '#price',
    searchbox: false,
    offset: false,
    placeholder: 'Select Price ',
  });
}

if (document.getElementById('rating')) {
  var ratings = new BVSelect({
    selector: '#rating',
    searchbox: false,
    offset: false,
    placeholder: 'Select Rating',
  });
}

if (document.getElementById('sort-by')) {
  var sort = new BVSelect({
    selector: '#sort-by',
    searchbox: false,
    offset: false,
    placeholder: 'Sort by: Latest',
  });
}

if (document.getElementById('number')) {
  var number = new BVSelect({
    selector: '#number',
    searchbox: false,
    offset: false,
    placeholder: 'Show: 16',
  });
}

/* 
    4. Loader 
======================== */
const preloader = document.querySelector('.loader');

window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

/* 
    5. Newsletter Modal
======================== */
// Do not show newsletter
let doNotShowNewsletter = document.getElementById('doNotShowNewsletter');

if (doNotShowNewsletter) {
  doNotShowNewsletter.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      localStorage.setItem('hide-newsletter', true);
    }
  });
}

// Show Newsletter Modal
newsletterModal = document.getElementById('newsletter');
if (newsletterModal) {
  let newsletter = JSON.parse(localStorage.getItem('hide-newsletter'));

  if (newsletter == false || !newsletter) {
    var newsletterModal = new bootstrap.Modal(newsletterModal);
    newsletterModal.show();
  }
}

/* 
    6. Menu 
======================== */

//  Header navigation Sidebar
let closeBar = document.querySelector('.header__cross');
let mobileSidebar = document.querySelector('.header__sidebar');
let menuBtn = document.querySelector('.header__sidebar-btn');
const body = document.querySelector('body');

// Open
if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    mobileSidebar.classList.add('active');
    body.classList.add('overlay');
  });
}

// close
closeBar.addEventListener('click', function () {
  mobileSidebar.classList.remove('active');
  body.classList.remove('overlay');
});

var navMenu = [].slice.call(
  document.querySelectorAll('.header__mobile-menu-item')
);

for (var y = 0; y < navMenu.length; y++) {
  navMenu[y].addEventListener('click', function () {
    menuClick(this);
  });
}

function menuClick(current) {
  const active = current.classList.contains('active');
  navMenu.forEach((el) => el.classList.remove('active'));
  if (active) {
    current.classList.remove('active');
  } else {
    current.classList.add('active');
  }
}

/* 
    7. Shopping Cart 
======================== */
let cartBtn = document.querySelector('#cart-bag');
let closeBtn = document.querySelector('.shopping-cart .close');
const shoppingCart = document.querySelector('.shopping-cart');

// Event Click Popup cart open
cartBtn.addEventListener('click', function () {
  const body = document.querySelector('body');
  body.classList.add('overlay');
  shoppingCart.classList.add('active');
});

// Event Click Popup Close
closeBtn.addEventListener('click', function () {
  const body = document.querySelector('body');
  body.classList.remove('overlay');
  shoppingCart.classList.remove('active');
});

// 8. Product Image Change
$galleryItem = $('.gallery-item');
$galleryItem.on('click', function () {
  $('.gallery-item.active').removeClass('active');
  $(this).addClass('active');
  let element = $(this).find('img');
  if (element) {
    let imgSource = element.attr('src');

    $('.product-main-image').attr('src', imgSource);
  }
});

/* 
    9. Cart Quantity
======================== */
function increment() {
  document.getElementById('counter-btn-counter').stepUp();
}

function decrement() {
  document.getElementById('counter-btn-counter').stepDown();
}

/* 
    10. Products Filter
======================== */
const filterToggle = document.querySelector('#filter');
if (filterToggle) {
  filterToggle.addEventListener('click', function () {
    const sidebar = document.querySelector('.shop-content .col-lg-3');
    const productGallery = document.querySelector('.shop-content .col-lg-9');
    const column = document.querySelectorAll('.custom-col');
    const productContent = document.querySelectorAll(
      '.shop__product-items .col-md-6'
    );

    sidebar.classList.toggle('d-none');
    productGallery.classList.toggle('col-lg-12');
    console.log(column);
    column.forEach((item) => {
      if(item.classList.contains('col-xl-6')){
        item.classList.remove("col-xl-6");
		    item.classList.add("col-xl-4");
      }
      else if (item.classList.contains("col-xl-4")) {
			item.classList.remove("col-xl-4");
			item.classList.add("col-xl-6");
		}
      
    }) 

    // it's will be on 4 column
    productContent.forEach((item) => {
      if (item.classList.contains('col-xl-4')) {
        item.classList.add('col-xl-3');
        item.classList.remove('col-xl-4');
      } else if (item.classList.contains('col-xl-3')) {
        item.classList.add('col-xl-4');
        item.classList.remove('col-xl-3');
      }
    });
  });
}

const filterBtn = document.querySelector('button.filter');
if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    let shopSidebar = document.querySelector('.shop__sidebar');
    let body = document.querySelector('body');
    shopSidebar.classList.toggle('active');
    body.classList.toggle('overlay');
  });
}

/* 
    11. Range Slider
======================== */
var range = document.getElementById('priceRangeSlider');

if (range) {
  noUiSlider.create(range, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 1500,
    },
    tooltips: true,
  });
}

/* 
    12. Lightbox Plugin
======================== */
if (document.getElementsByClassName('venobox')[0]) {
  $('.venobox').venobox({
    spinner: 'cube-grid',
  });
}

/* 
    13. Swiper Slider
======================== */
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

/* 
    14. Filter 
======================== */
// 14.1    Filter Sidebar
const orderHisotryFilter = document.querySelector('.filter-icon');


if (orderHisotryFilter) {
  orderHisotryFilter.addEventListener('click', () => {
    let sidebarNav = document.querySelector('.dashboard__nav');
    let body = document.querySelector('body');
    sidebarNav.classList.toggle("active");
    body.classList.toggle('overlay');
  });
}

var overlay = document.querySelector(".overlay");
if(overlay){
  var overlayAfter = window.getComputedStyle(overlay, "::after");
  console.log(overlayAfter);
}

  // overlayAfter.addEventListener('click', () => {
  //   let sidebarNav = document.querySelector(".dashboard__nav");
	//   let body = document.querySelector("body");
	//   sidebarNav.classList.toggle("active");
	//   body.classList.toggle("overlay");
  // })

// 14.2    Blog Sidebar Filter
const blogListFilter = document.querySelector('button.filter');
if (blogListFilter) {
  blogListFilter.addEventListener('click', () => {
    let blogSidebar = document.querySelector('.sidebar');
    let body = document.querySelector('body');
    blogSidebar.classList.toggle('active');
    body.classList.toggle('overlay');
  });
}

// 14.3    Shop Sidebar Filter
const filterSidebarButton = document.querySelector('button.filter');
if (filterSidebarButton) {
  filterSidebarButton.addEventListener('click', () => {
    let filterSidebar = document.querySelector('.filter__sidebar');
    let body = document.querySelector('body');
    filterSidebar.classList.toggle('active');
    body.classList.toggle('overlay');
  });
}

/* 
    15. Password Show/Hide
======================== */
function showPassword(id, el) {
  let x = document.getElementById(id);
  if (x.type === 'password') {
    x.type = 'text';
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> ';
  } else {
    x.type = 'password';
    el.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  }
}

/* 
    16. Slider
======================== */
// 16.1    Banner Slider
var bannerOne = new Swiper('.banner-slider--one', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var bannerTwo = new Swiper('.banner-slider--02', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var bannerThree = new Swiper('.banner-slider--03', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var bannerFour = new Swiper('.banner-slider--04', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .swiper-button--next',
    prevEl: ' .swiper-button--prev',
  },
});

// 16.2    Categories Slider
var categories = new Swiper('.popular-categories--slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
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
    delay: 4000,
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

// 16.3    Products Slider
var products = new Swiper('.popular-products--slider', {
  slidesPerView: 'auto',
  autoHeight: true,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
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
    delay: 4000,
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
    delay: 4000,
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
    delay: 4000,
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
    delay: 4000,
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
    delay: 4000,
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
    delay: 4000,
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

// 16.4    Gallery Slider
var productViewThumbs = new Swiper(".gallery-items-slider", {
	centeredSlides: true,
	slidesPerView: 4,
	loop: true,
	autoHeight: false,
	direction: "vertical",
	spaceBetween: 24,
	navigation: {
		nextEl: ".gallery-next-item",
		prevEl: ".gallery-prev-item",
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			centeredSlides: false,
			direction: "horizontal",
			spaceBetween: 10,
		},
		570: {
			slidesPerView: 4,
			centeredSlides: false,
			direction: "horizontal",
			spaceBetween: 24,
		},
		992: {
			slidesPerView: 4,
			centeredSlides: false,
			direction: "vertical",
			spaceBetween: 24,
		},
	},
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

var galleryMain = new Swiper('.gallery-main', {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next-item',
    prevEl: '.swiper-button-prev-item',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

var productViewThumbs = new Swiper('.gallery-thumbs-slider', {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical',
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

var productViewGallery = new Swiper('.gallery-main-slider', {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next-item',
    prevEl: '.swiper-button-prev-item',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: productViewThumbs,
  },
});

// 16.5    Deals Slider
var deals = new Swiper('.deals-products--slider', {
  slidesPerView: 'auto',
  autoHeight: true,
  // centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
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

// 16.6    Featured Sliders
var featured = new Swiper('.featured-slider--one', {
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
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

var featuredFive = new Swiper('.featured-slider--five', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
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

var featured = new Swiper('.related-slider--one', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
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
      slidesPerView: 4,
    },
  },
});

var featured = new Swiper('.our-feature--slider', {
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },
});

// 16.7    News Slider
var news = new Swiper(".news-slider--one", {
	spaceBetween: 24,
	loop: true,
	loopFillGroupWithBlank: true,
	// autoplay: {
	// 	delay: 4000,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: ".swiper-pagination",
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

// 16.8    Testimonial Slider
var testimonialOne = new Swiper('.testimonial-slider--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
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
      spaceBetween: 12,
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
    delay: 4000,
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

// 16.9    Instagram Slider
var insta = new Swiper('.instagram-slider--one', {
  slidesPerView: 6,
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  autoplay: {
    delay: 4000,
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

// 16.10   Brands Slider
var brandsName = new Swiper('.brand-name-slide--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  autoHeight: true,
  autoplay: {
    delay: 4000,
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

// 16.11   Member Slider
var memebers = new Swiper('.members-slider--one', {
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ' .arrows__btn-next ',
    prevEl: ' .arrows__btn-prev',
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

// 16.12   Blog Post Slider
var blogs = new Swiper('.blog-list--slider', {
  spaceBetween: 15,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});


// upload image
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$("#imagePreview").css(
				"background-image",
				"url(" + e.target.result + ")"
			);
			$("#imagePreview").hide();
			$("#imagePreview").fadeIn(650);
		};
		reader.readAsDataURL(input.files[0]);
	}
}
$("#imageUpload").change(function () {
	readURL(this);
});