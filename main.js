const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

const iconBars = document.getElementById('icon-bars');
const iconClose = document.getElementById('icon-close');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Toggle icons
  if (navMenu.classList.contains('show')) {
    iconBars.style.display = "none";
    iconClose.style.display = "block";
  } else {
    iconBars.style.display = "block";
    iconClose.style.display = "none";
  }
});