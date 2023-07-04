// mobile menu
const toggler = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".nav-menu");

toggler.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".nav-menu") &&
    !event.target.closest(".navbar-toggler")
  ) {
    var navMenu = document.querySelector(".nav-menu");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  }
});

// promene stanja headera
document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 170) {
    var headerBottom = document.querySelector(".header-bottom");
    headerBottom.classList.add("header-bottom--sticky");
  } else {
    var headerBottom = document.querySelector(".header-bottom");
    headerBottom.classList.remove("header-bottom--sticky");
  }
});

// swiper
const swiper = new Swiper(".testSwiper", {
  //Optional parametars
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  //If we nedd pagination
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
});
