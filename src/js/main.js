// Table Contents

//
const preloader = document.querySelector('.loader');

window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

//  Header navigation Sidebar
let closeBar = document.querySelector('.header__cross');
let mobileSidebar = document.querySelector('.header__sidebar');
let menuBtn = document.querySelector('.header__sidebar-btn');
const body = document.querySelector('body');

// Open
if(menuBtn){
  menuBtn.addEventListener('click', function () {
    mobileSidebar.classList.add('active');
    body.classList.add('overlay');
  });
}

// close
if(closeBar){
  closeBar.addEventListener('click', function () {
    mobileSidebar.classList.remove('active');
    body.classList.remove('overlay');
  });
}

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
