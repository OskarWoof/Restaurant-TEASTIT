// mobile menu
const toggler = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".mainNav");

toggler.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".mainNav") &&
    !event.target.closest(".navbar-toggler")
  ) {
    var navMenu = document.querySelector(".mainNav");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  }
});



// promene stanja headera
$(document).on("scroll", function () {
  if ($(window).scrollTop() >= 130) {
    $(".header-bottom").addClass("header-bottom--sticky");
  } else {
    $(".header-bottom").removeClass("header-bottom--sticky");
  }
});



