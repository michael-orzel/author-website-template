const bars = document.querySelector('.nav-bars');
const overlay = document.querySelector('.overlay');

function toggleDropdown() {
  const navDropdown = document.querySelector('.nav-dropdown');

  if (navDropdown.style.display === "block") {
    navDropdown.style.display = "none";
    overlay.style.display = "none";
  }
  else {
    navDropdown.style.display = "block";
    overlay.style.display = "block";
  }
}

function removeOverlay() {
  const navDropdown = document.querySelector('.nav-dropdown');

  navDropdown.style.display = "none";
  overlay.style.display = "none";
}

bars.addEventListener('click', toggleDropdown);
overlay.addEventListener('click', removeOverlay);
