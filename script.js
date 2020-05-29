let hamburger = document.getElementById("bar");
let closemenu = document.getElementById("close");
let nav = document.getElementById("mobilenav");

hamburger.addEventListener("click", openMenu);
closemenu.addEventListener("click", closeMenu);

function openMenu(e) {
  if (e.target.classList.contains("hambug")) {
    hamburger.style.display = "none";
    closemenu.style.display = "block";
    nav.style.display = "block";
  }
}
function closeMenu(e) {
  if (e.target.classList.contains("closeham")) {
    hamburger.style.display = "block";
    closemenu.style.display = "none";
    nav.style.display = "none";
  }
}
