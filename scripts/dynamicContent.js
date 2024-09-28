document.addEventListener('DOMContentLoaded', function () {
    // Dynamically insert the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Dynamically insert the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
});
