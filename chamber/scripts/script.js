// JavaScript for theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Dummy weather API data (replace with actual API call)
const weatherData = {
    currentTemp: "75°F",
    forecast: ["90°F", "89°F", "68°F"]
};

document.getElementById("currentWeather").textContent = weatherData.currentTemp;
