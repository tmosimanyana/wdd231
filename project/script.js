// script.js

// Example function to fetch weather information
async function fetchWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=5c7e429e1b20f30b60de00a18bcc0e92KEY&q=Molepolole');
    const data = await response.json();
    document.getElementById('weather-info').textContent = `Current temperature in Molepolole: ${data.current.temp_c}°C`;
}

// Call the fetchWeather function when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);
