document.addEventListener("DOMContentLoaded", () => {

  const navBtn = document.querySelector(".nav-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  navBtn.addEventListener("click", function (e) {
    this.classList.toggle("is-active");
    if (mobileNav.classList.contains("-translate-y-full")) {
      mobileNav.classList.remove("-translate-y-full");
    } else {
      mobileNav.classList.add("-translate-y-full");
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

  const flickTop = new Flickity( '.carousel', {
    "cellAlign": "left",
    "friction": 1,
    "selectedAttraction": 0.2,
    "autoPlay": 4000,
    "pageDots": false,
    "prevNextButtons": false,
    "wrapAround": true,
  });

});