// Update the current year dynamically
function updateYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Update the last modified date dynamically
function updateLastModified() {
    document.getElementById('last-modified').textContent = document.lastModified;
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    updateYear();
    updateLastModified();
});
