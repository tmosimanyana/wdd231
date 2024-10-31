// Fetch Weather Data
async function fetchWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Molepolole';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    const currentWeather = data.list[0];
    const weatherDescription = capitalizeWords(currentWeather.weather.map(w => w.description).join(", "));
    document.getElementById('temperature').textContent = `Temperature: ${Math.round(currentWeather.main.temp)}°C`;
    document.getElementById('description').textContent = `Description: ${weatherDescription}`;
    document.getElementById('humidity').textContent = `${currentWeather.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${Math.round(currentWeather.wind.speed)} km/h`;

    // Three-day forecast
    const forecastContainer = document.createElement('div');
    forecastContainer.className = 'forecast';
    data.list.slice(0, 3).forEach((forecast, index) => {
        const forecastDiv = document.createElement('div');
        forecastDiv.innerHTML = `
            <h4>Day ${index + 1}</h4>
            <p>${capitalizeWords(forecast.weather.map(w => w.description).join(", "))}</p>
            <p>${Math.round(forecast.main.temp)}°C</p>
        `;
        forecastContainer.appendChild(forecastDiv);
    });
    document.querySelector('.weather-icon').appendChild(forecastContainer);
}

// Utility to capitalize weather description
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Call weather function on page load
fetchWeatherData();
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
});
