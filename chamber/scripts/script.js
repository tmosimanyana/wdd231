// scripts/weather.js

export async function fetchWeatherData(apiKey, location) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayCurrentWeather(data);
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayCurrentWeather(data) {
    const current = data.list[0];
    const weatherElement = document.querySelector('.current-weather');

    const temperature = Math.round(current.main.temp);
    const weatherDescription = current.weather.map(w => capitalizeWords(w.description)).join(", ");
    const humidity = current.main.humidity;
    const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();

    weatherElement.innerHTML = `
        <p>Temperature: ${temperature}°F</p>
        <p>Description: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Sunrise: ${sunrise}, Sunset: ${sunset}</p>
    `;
}

function displayForecast(data) {
    const forecastElement = document.querySelector('.forecast');
    const forecastDays = [8, 16, 24]; // Indices for three different days in the forecast data

    forecastElement.innerHTML = forecastDays.map(index => {
        const forecast = data.list[index];
        const day = new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: 'long' });
        const temp = Math.round(forecast.main.temp);
        return `<p>${day}: ${temp}°F</p>`;
    }).join("");
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
