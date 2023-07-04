// JavaScript kod za navigaciju

// Dohvaćanje navigacijskih elemenata
var navbarToggler = document.querySelector(".navbar-toggler");
var nav-menu = document.querySelector(".nav-menu");
var subMenu = document.querySelector(".sub-menu");
var pagesLink = document.querySelector(".nav-link");

// Dodavanje događaja na klik mobilnog tumblera
navbarToggler.addEventListener("click", function () {
  nav-menu.classList.toggle("show");
});

// Dodavanje događaja na hover nad podmenijem
subMenu.addEventListener("mouseenter", function () {
  pagesLink.classList.add("active");
});

subMenu.addEventListener("mouseleave", function () {
  pagesLink.classList.remove("active");
});
