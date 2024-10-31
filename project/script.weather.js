// Fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API key
    const city = 'Molepolole'; // Replace with the preferred city name
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to fetch weather data');
        
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display weather data in the HTML elements
function displayWeather(data) {
    const temperature = Math.round(data.main.temp); // No decimal points
    const description = data.weather.map(event => capitalizeWords(event.description)).join(', ');
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Populate HTML elements with weather data
    document.getElementById('temp-value').textContent = `${temperature}°C`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('wind-speed').textContent = `${windSpeed} km/h`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Capitalize each word in a weather description
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Call the fetchWeather function on page load
document.addEventListener('DOMContentLoaded', fetchWeather);
