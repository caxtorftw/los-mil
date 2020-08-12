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
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetHeight) {
      body.classList.add('nav-is-fixed');
    } else {
      body.classList.remove('nav-is-fixed');
    }
  })

  const flickHero = new Flickity( '.carousel-hero', {
    "friction": 1,
    "selectedAttraction": 0.2,
    "autoPlay": 4000,
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