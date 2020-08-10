document.addEventListener("DOMContentLoaded", () => {

  const navBtn = document.querySelector(".nav-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  navBtn.addEventListener("click", function (e) {
    this.classList.toggle("is-active");
    if (mobileMenu.classList.contains("-translate-y-full")) {
      mobileMenu.classList.remove("-translate-y-full");
    } else {
      mobileMenu.classList.add("-translate-y-full");
    }
  });

  const body = document.querySelector('body');
  const navbar = document.querySelector('nav');
  const navLogo = document.querySelector('.nav__logo');
  const heroLogo = document.querySelector('.hero__logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetHeight) {
      body.classList.add('nav-is-fixed');
      navLogo.classList.remove('invisible');
    } else {
      body.classList.remove('nav-is-fixed');
      navLogo.classList.add('invisible');
    }
  })

  const flickHero = new Flickity( '.carousel-hero', {
    "friction": 1,
    "selectedAttraction": 0.2,
    //"autoPlay": 4000,
    "prevNextButtons": false,
    "wrapAround": true,
  });

  const flickBrands = new Flickity( '.carousel-brands', {
    "cellAlign": "left",
    "friction": 1,
    "selectedAttraction": 0.2,
    "autoPlay": 4000,
    "pageDots": false,
    "prevNextButtons": false,
    "wrapAround": true,
  });

});