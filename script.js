// script.js

// Function to set the current year in the footer
function setCurrentYear() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
}

// Function to set the last modified date in the footer
function setLastModified() {
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
}

// Toggle mobile menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Call functions on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setLastModified();
});




