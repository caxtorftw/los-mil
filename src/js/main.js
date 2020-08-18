document.addEventListener("DOMContentLoaded", () => {

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

  gsap.fromTo('.logo', { opacity: 0, translateX: '-50%' }, { duration: .5, delay: .2, opacity: 1, translateX: 0 });
  gsap.fromTo('.nav-btn', { opacity: 0, translateX: '50%' }, { duration: .5, delay: .7, opacity: 1, translateX: 0 });
  gsap.fromTo('.fade-in', { opacity: 0 }, { duration: .5, delay: 1, opacity: 1, stagger: .2 });
  gsap.fromTo('.mobile-link', { opacity: 0, translateY: '-50%' }, { duration: .5, delay: .2, opacity: 1, translateY: 0, stagger: .2 });

  const headings = document.querySelectorAll('.heading');
  
  const options = {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1200
  };

  ScrollReveal().reveal(headings, options);

  const navBtn = document.querySelector(".nav-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu li");
  const mobileSocial = document.querySelectorAll(".mobile-menu ul li");

  navBtn.addEventListener("click", function (e) {
    this.classList.toggle("is-active");
    if (mobileMenu.classList.contains("-translate-y-full")) {
      mobileMenu.classList.remove("-translate-y-full");
    } else {
      mobileMenu.classList.add("-translate-y-full");
    }
  });

  mobileLinks.forEach(mobileLink => {
    mobileLink.addEventListener("click", () => {
      navBtn.classList.toggle("is-active");
      mobileMenu.classList.toggle("-translate-y-full");
    })
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

  // Copyright gets updated every year
  const year = document.querySelector('#year');
  const getYear = () => new Date().getFullYear();
  year.textContent = getYear();

});