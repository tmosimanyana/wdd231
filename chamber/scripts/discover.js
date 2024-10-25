// Update footer with year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Visitor message logic
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
let message = "Welcome! Let us know if you have any questions.";

if (lastVisit) {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit === 0) {
        message = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

document.getElementById('visitorMessage').textContent = message;
localStorage.setItem('lastVisit', now);

// Lazy loading effect
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
        img.addEventListener('load', () => {
            img.dataset.loaded = "true";
        });
    });
});
