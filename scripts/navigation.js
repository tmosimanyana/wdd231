// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-toggle').addEventListener('click', () => {
      document.querySelector('.nav-list').classList.toggle('open');
  });

  // Wayfinding: Highlight the active page link
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          navLinks.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
      });
  });
});
