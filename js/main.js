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

// Get the header and the sticky element
var header = document.querySelector("header");
var headerTop = document.querySelector(".header-top");
var headerBottom = document.querySelector(".header-bottom");

// Get the offset position of the sticky element
var stickyOffset = headerBottom.offsetTop;

stickyOffset = 300;

// Function to handle the scroll event
function handleScroll() {
  // If the scroll position is greater than or equal to the offset position of the sticky element,
  // add the "sticky" class to the element to make it sticky
  if (window.pageYOffset >= stickyOffset) {
    headerBottom.classList.add("sticky");
  } else {
    headerBottom.classList.remove("sticky");
  }
  console.log(window.pageYOffset);
}

// Attach the handleScroll function to the window scroll event
window.addEventListener("scroll", handleScroll);


//invertovani header, promeni boju kad scrolujes
//var className = "inverted";
// var scrollTrigger = 60;

// window.onscroll = function() {
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     document.getElementsByTagName("header")[0].classList.add(className);
//   } else {
//     document.getElementsByTagName("header")[0].classList.remove(className);
//   }
// };


// jquery nacin promene stanja headera
// $(document).on("scroll", function () {
//   if ($(window).scrollTop() > 30) {
//     $("#container-header").addClass("change-color");
//   } else {
//     $("#container-header").removeClass("change-color");
//   }
// });

// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   var logo = document.querySelector(".logo img");
//   var menuLinks = document.querySelectorAll(".menu a");
//   var scrollPosition = window.scrollY;

//   if (scrollPosition > 50) {
//     header.style.backgroundColor = "red";
//     logo.style.filter = "grayscale(100%)";
//     menuLinks.forEach(function (link) {
//       link.style.color = "blue";
//     });
//   } else {
//     header.style.backgroundColor = "";
//     logo.style.filter = "";
//     menuLinks.forEach(function (link) {
//       link.style.color = "";
//     });
//   }
// });

