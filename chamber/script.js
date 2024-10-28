// JavaScript for Dark Mode Toggle
const circleDecoration = document.querySelector('.circle-decoration');

circleDecoration.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Toggle symbol inside the circle decoration
  if (document.body.classList.contains('dark-mode')) {
    circleDecoration.textContent = '☀️'; // Sun symbol for light mode
  } else {
    circleDecoration.textContent = '☾'; // Moon symbol for dark mode
  }
});

// JavaScript for Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});
