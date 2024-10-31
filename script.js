// Fetch weather data from a mock API and update the page
const weatherApiUrl = "https://5c7e429e1b20f30b60de00a18bcc0e92.mockweather.com/weather?location=Molepolole"; // Replaced with actual weather API URL
const weatherElement = document.querySelector(".current-weather ul");
const forecastElement = document.querySelector(".weather-forecast ul");

async function fetchWeatherData() {
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();

        // Update Current Weather section
        weatherElement.innerHTML = `
            <li>${data.current.temp}°F</li>
            <li>${data.current.condition}</li>
            <li>High: ${data.current.high}°F</li>
            <li>Low: ${data.current.low}°F</li>
            <li>Humidity: ${data.current.humidity}%</li>
            <li>Sunrise: ${data.current.sunrise}</li>
            <li>Sunset: ${data.current.sunset}</li>
        `;

        // Update Weather Forecast section
        forecastElement.innerHTML = `
            <li>Today: ${data.forecast[0].temp}°F</li>
            <li>Wednesday: ${data.forecast[1].temp}°F</li>
            <li>Thursday: ${data.forecast[2].temp}°F</li>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Initialize the page with data
fetchWeatherData();
