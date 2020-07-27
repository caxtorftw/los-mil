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

});