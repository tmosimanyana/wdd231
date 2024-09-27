// Dynamic Last Modified Date
document.addEventListener('DOMContentLoaded', function() {
    const lastModifiedDate = document.querySelector('footer p:nth-child(2)');
    const currentDate = new Date(document.lastModified);
    lastModifiedDate.textContent = `Last Update: ${currentDate.toLocaleString()}`;
});

// Responsive Navigation
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'none' || navMenu.style.display === '' ? 'flex' : 'none';
});
