const apiKey = "5c7e429e1b20f30b60de00a18bcc0e92"; // Replace with actual API key
const location = "Molepolole";
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
const weatherElement = document.querySelector(".current-weather ul");
const forecastElement = document.querySelector(".weather-forecast ul");

async function fetchWeatherData() {
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();

        // Check for a successful response
        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        // Update Current Weather section
        weatherElement.innerHTML = `
            <li>${data.main.temp}°F</li>
            <li>${data.weather[0].description}</li>
            <li>High: ${data.main.temp_max}°F</li>
            <li>Low: ${data.main.temp_min}°F</li>
            <li>Humidity: ${data.main.humidity}%</li>
            <li>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</li>
            <li>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</li>
        `;

        // OpenWeatherMap free tier only includes current weather in this endpoint.
        // For multi-day forecast, you would need a different endpoint or plan.
        forecastElement.innerHTML = `
            <li>Today: ${data.main.temp}°F</li>
            <li>Tomorrow: Forecast not included in this API</li>
            <li>Day After Tomorrow: Forecast not included in this API</li>
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
