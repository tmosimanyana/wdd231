document.addEventListener('DOMContentLoaded', () => {
    // Get the current year for copyright
    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year').textContent = currentYear;

    // Get the last modified date of the document
    const lastModified = document.lastModified;
    document.querySelector('#last-modified').textContent = lastModified;
});
