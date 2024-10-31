const weatherCard = document.getElementById("weather-card");

async function fetchWeather(city = "molepolole") {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5c7e429e1b20f30b60de00a18bcc0e92&q=${city}&aqi=no`);
        const data = await response.json();
        
        weatherCard.innerHTML = `
            <div class="weather-header">
                <h3>${data.location.name}</h3>
                <p>${data.location.localtime}</p>
            </div>
            <div class="weather-main">
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                <p class="temp">${data.current.temp_c}°C</p>
                <p>${data.current.condition.text}</p>
            </div>
            <div class="weather-details">
                <p>Feels Like: ${data.current.feelslike_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind: ${data.current.wind_kph} km/h</p>
            </div>
        `;
    } catch (error) {
        weatherCard.innerHTML = `<p>Unable to load weather data. Please try again later.</p>`;
    }
}

// Load weather data on page load
document.addEventListener("DOMContentLoaded", () => fetchWeather("molepolole"));
