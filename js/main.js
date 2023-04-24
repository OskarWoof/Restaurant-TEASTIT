document.querySelector(".navbar-toggler").addEventListener("click", toggleMenu);

function toggleMenu() {
  const mainNav = document.querySelector(".mainNav");

  if (mainNav.style.display === "none") {
    mainNav.style.display = "block";
  } else {
    mainNav.style.display = "none";
  }
}
