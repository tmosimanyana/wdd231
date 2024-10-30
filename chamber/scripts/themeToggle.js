// scripts/themeToggle.js
export function toggleTheme() {
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
