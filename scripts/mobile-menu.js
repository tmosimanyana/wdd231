// Function to close the mobile menu
function closeMobileMenu(event) {
    const navList = document.getElementById('navList');
    const menuToggle = document.getElementById('menuToggle');

    if (navList.classList.contains('show') && !navList.contains(event.target) && event.target !== menuToggle) {
        navList.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

// Add event listener for clicks on the document
document.addEventListener('click', closeMobileMenu);
