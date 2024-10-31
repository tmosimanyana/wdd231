// script.weather.js

// Replace with your actual OpenWeatherMap API key
const API_KEY = '5c7e429e1b20f30b60de00a18bcc0e92'; // Insert your API key here
const CITY = 'Molepolole,BW'; // Example city; replace with the desired location
const WEATHER_CARD = document.getElementById('weather-card');

// Function to fetch current weather data
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data); // Display the current weather data
        } else {
            WEATHER_CARD.innerHTML = `<p>Error: ${data.message}</p>`; // Display error message
        }
    } catch (error) {
        WEATHER_CARD.innerHTML = `<p>Error: ${error.message}</p>`; // Handle fetch error
    }
}

// Function to display current weather data in the card
function displayWeather(data) {
    const { main, weather, name } = data;
    const temperature = Math.round(main.temp);
    const weatherDescription = weather[0].description;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    // Create the HTML structure for the weather card
    WEATHER_CARD.innerHTML = `
        <div class="weather-card-content">
            <img src="${iconUrl}" alt="${weatherDescription}" class="weather-icon" loading="lazy">
            <h3>${name}</h3>
            <p class="temperature">${temperature}°C</p>
            <p class="weather-description">${weatherDescription}</p>
        </div>
    `;

    // Optional: Fetch and display 3-day forecast
    fetchForecast();
}

// Function to fetch the 3-day weather forecast
async function fetchForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayForecast(data); // Display the forecast data
        } else {
            console.error(data.message); // Log any errors
        }
    } catch (error) {
        console.error(error); // Log fetch error
    }
}

// Function to display the 3-day weather forecast
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
        forecastContainer.appendChild(forecastItem); // Add forecast item to list
    }

    WEATHER_CARD.appendChild(forecastContainer); // Append forecast to the weather card
}

// Fetch weather data on page load
fetchWeather();
