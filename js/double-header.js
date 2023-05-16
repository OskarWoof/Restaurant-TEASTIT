/* Select the top and bottom header elements */
const topHeader = document.querySelector(".top-header");
const bottomHeader = document.querySelector(".bottom-header");

/* Set initial values for header heights */
let topHeaderHeight = topHeader.offsetHeight;
let bottomHeaderHeight = bottomHeader.offsetHeight;

/* Listen for scroll events on the window */
window.addEventListener("scroll", () => {
  /* Calculate the distance scrolled from the top of the page */
  const scrollDistance = window.pageYOffset;

  /* Shrink the bottom header smoothly */
  if (scrollDistance > topHeaderHeight) {
    const scale =
      (bottomHeaderHeight - (scrollDistance - topHeaderHeight)) /
      bottomHeaderHeight;
    bottomHeader.style.transform = `scale(${scale})`;
  } else {
    bottomHeader.style.transform = "scale(1)";
  }

  /* Hide the top header when scrolling down */
  if (scrollDistance > topHeaderHeight) {
    topHeader.style.opacity = "0";
  } else {
    topHeader.style.opacity = "1";
  }
});
