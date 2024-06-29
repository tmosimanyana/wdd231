document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set last modified date
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = 'Last Update: ' + document.lastModified;
});




