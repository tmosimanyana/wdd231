document.addEventListener("DOMContentLoaded", function () {
    // Update the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    // Update the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = "Last updated: " + lastModified;

    // Additional JavaScript logic here (for the hamburger menu or other interactive features)
});
