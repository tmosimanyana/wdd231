async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key
    const city = 'Kasane'; // Replace with the actual city you want to fetch
    const units = 'metric'; // Use 'imperial' for Fahrenheit
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        updateWeatherSection(data);
    } catch (error) {
        console.error('Fetch Weather Error:', error);
    }
}

function updateWeatherSection(data) {
    const temperature = Math.round(data.main.temp); // Round to nearest whole number
    const weatherDescription = capitalizeWords(data.weather.map(event => event.description).join(', ')); // Capitalize weather description
    const high = Math.round(data.main.temp_max);
    const low = Math.round(data.main.temp_min);
    const humidity = data.main.humidity;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    document.getElementById('temperature').innerText = `${temperature}°C`;
    document.getElementById('weather-description').innerText = weatherDescription;
    document.getElementById('high-low').innerText = `High: ${high}°C | Low: ${low}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('sunrise-sunset').innerText = `Sunrise: ${sunrise} | Sunset: ${sunset}`;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch weather data on page load
document.addEventListener('DOMContentLoaded', fetchWeather);
