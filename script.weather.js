// script.weather.js

const API_KEY = "5c7e429e1b20f30b60de00a18bcc0e92";
const CITY = "Molepolole,BW"; // Adjust the city as necessary
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather.map(item => item.description.charAt(0).toUpperCase() + item.description.slice(1)).join(", ");
        const weatherOutput = `
            <h3>${temperature}°C</h3>
            <p>${weatherDescription}</p>
        `;
        document.getElementById("weather-info").innerHTML = weatherOutput;

        // Call for forecast data
        getForecast(data.coord.lat, data.coord.lon);
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}

async function getForecast(lat, lon) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        let forecastHtml = "<h3>3-Day Forecast</h3><ul>";
        for (let i = 0; i < 3; i++) {
            const day = data.list[i * 8]; // Each day has 8 entries
            const dayTemp = Math.round(day.main.temp);
            const dayDesc = day.weather.map(item => item.description.charAt(0).toUpperCase() + item.description.slice(1)).join(", ");
            forecastHtml += `<li>${day.dt_txt.split(" ")[0]}: ${dayTemp}°C, ${dayDesc}</li>`;
        }
        forecastHtml += "</ul>";

        document.getElementById("weather-info").innerHTML += forecastHtml;
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

getWeather();
