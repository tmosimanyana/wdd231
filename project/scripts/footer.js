document.addEventListener('DOMContentLoaded', function() {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
});
