const weatherCard = document.getElementById("weather-card");

async function fetchWeather() {
    try {
        // Placeholder API; replace with a real weather API for actual data
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Kweneng');
        const data = await response.json();

        weatherCard.innerHTML = `
            <h3>${data.location.name}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
        `;
    } catch (error) {
        weatherCard.innerHTML = `<p>Unable to load weather data.</p>`;
    }
}

// Load weather data on page load
document.addEventListener("DOMContentLoaded", fetchWeather);
