// document.querySelector(".navbar-toggler").addEventListener("click", toggleMenu);
// // console.log(toggle);

// const mainNav = document.querySelector(".mainNav");
// console.log(mainNav);

// function toggleMenu() {
//   if ((mainNav.style.display = "none")) {
//     console.log(false);
//     mainNav.classList.add("open");
//   } else {
//     // mainNav.style.dispaly = "block";
//     // mainNav.classList.remove("open");
//   }
// }

// toggleMenu();

function myFunction() {
  let myNav = document.getElementById("mainNavigation");
  console.log(myNav);
  if (myNav.style.display === "none") {
    myNav.style.display = "block";
  } else {
    myNav.style.display = "none";
  }
}
