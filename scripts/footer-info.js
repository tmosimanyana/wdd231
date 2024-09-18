document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    const currentYearElem = document.getElementById('currentyear');
    currentYearElem.textContent = new Date().getFullYear();

    // Update last modified date
    const lastModifiedElem = document.getElementById('lastModified');
    lastModifiedElem.textContent = `Last modified: ${document.lastModified}`;
});
