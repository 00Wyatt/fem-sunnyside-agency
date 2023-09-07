// Navbar Toggle
function toggleNav() {
  const navToggle = document.querySelector("#toggle");
  const navMenu = document.querySelector("#menu");
  if (navToggle.classList.contains("active")) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    navToggle.classList.add("active");
    navMenu.classList.add("active");
  }
}

function init() {
  document.querySelector("#toggle").addEventListener("click", toggleNav);
}
window.onload = init;