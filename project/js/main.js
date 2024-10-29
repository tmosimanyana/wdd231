document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    fetchWeatherData();
});

// Lazy load images with transition effect
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
        img.addEventListener('load', () => img.classList.add('loaded'));
    });
}

// Fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
    const apiKey = 'YOUR_API_KEY_HERE';
    const location = 'Molepolole, BW';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        document.getElementById('current-weather').textContent = 'Unable to load weather data.';
        document.getElementById('forecast').textContent = '';
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(data) {
    const { main, weather, name } = data;
    const weatherElement = document.getElementById('current-weather');
    weatherElement.innerHTML = `
        <p>Temperature: ${main.temp}°F</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Location: ${name}</p>
    `;

    // Simple example for forecast (OpenWeatherMap's one call API can provide a detailed forecast)
    const forecastElement = document.getElementById('forecast');
    forecastElement.innerHTML = `
        <p>High: ${main.temp_max}°F</p>
        <p>Low: ${main.temp_min}°F</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
