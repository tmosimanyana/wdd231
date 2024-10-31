// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

// Check and apply saved theme preference
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

// Toggle theme and update localStorage
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", isDarkMode ? "dark-mode" : "light-mode");
});

// Set Current Year and Last Modified Date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
