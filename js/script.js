// Navbar Toggle
function toggleNav() {
  const navToggle = document.querySelector("#hamburger");
  if (navToggle.classList.contains("active")) {
    navToggle.classList.remove("active");
  } else {
    navToggle.classList.add("active");
  }
}

function init() {
  document.querySelector("#hamburger").addEventListener("click", toggleNav);
}
window.onload = init;