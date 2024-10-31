// script.weather.js

// Replaced with your actual OpenWeatherMap API key
const API_KEY = '5c7e429e1b20f30b60de00a18bcc0e92'; // Insert your API key here
const CITY = 'Molepolole,BW'; // Example city; replace with the desired location
const WEATHER_CARD = document.getElementById('weather-card');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            WEATHER_CARD.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        WEATHER_CARD.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { main, weather, name } = data;
    const temperature = Math.round(main.temp);
    const weatherDescription = weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    // Create the HTML structure for the weather card
    WEATHER_CARD.innerHTML = `
        <img src="${iconUrl}" alt="${weatherDescription}" class="weather-icon" loading="lazy">
        <h3>${name}</h3>
        <p class="temperature">${temperature}°C</p>
        <p class="weather-description">${weatherDescription}</p>
    `;

    // Optional: Fetch and display 3-day forecast
    fetchForecast();
}

async function fetchForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayForecast(data);
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    const forecastContainer = document.createElement('ul');
    forecastContainer.classList.add('forecast-list');

    // Get the next 3 days forecast
    for (let i = 0; i < 3; i++) {
        const forecast = data.list[i * 8]; // 8 data points per day
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temp = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;

        const forecastItem = document.createElement('li');
        forecastItem.innerHTML = `
            <strong>${date}</strong>: ${temp}°C, ${description}
        `;
        forecastContainer.appendChild(forecastItem);
    }

    WEATHER_CARD.appendChild(forecastContainer);
}

// Fetch weather data on page load
fetchWeather();
