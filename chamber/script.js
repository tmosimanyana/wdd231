document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const modDateSpan = document.getElementById("mod-date");

    yearSpan.textContent = new Date().getFullYear();
    modDateSpan.textContent = new Date(document.lastModified).toLocaleDateString();

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});





