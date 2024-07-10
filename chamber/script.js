// script.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const modDateSpan = document.getElementById('mod-date');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modDateSpan) {
        modDateSpan.textContent = document.lastModified;
    }
});









