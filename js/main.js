document.querySelector(".navbar-toggler").addEventListener("click", toggleMenu);
// console.log(toggle);

const mainNav = document.querySelector(".mainNav");
console.log(mainNav);

function toggleMenu() {
  if ((mainNav.style.display = "none")) {
    console.log(false);
    mainNav.classList.add("open");
  } else {
    // mainNav.style.dispaly = "block";
    // mainNav.classList.remove("open");
  }
}

// toggleMenu();

