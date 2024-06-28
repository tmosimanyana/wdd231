document.addEventListener('DOMContentLoaded', () => {
    // Current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Last modified date
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    // Responsive navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});
