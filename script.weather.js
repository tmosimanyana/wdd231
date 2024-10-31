// Replace 'YOUR_API_KEY' with your actual OpenWeather API key.
const API_KEY = 'YOUR_API_KEY';
const CITY_ID = '2332453'; // Replace this with the city ID for your desired location

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch current weather data with error handling
async function fetchCurrentWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&units=imperial&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Failed to fetch current weather data');
        const data = await response.json();

        return {
            temperature: `${data.main.temp}°F`,
            condition: data.weather[0].description,
            high: `${data.main.temp_max}°F`,
            low: `${data.main.temp_min}°F`,
            humidity: `${data.main.humidity}%`,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Fetch 3-day weather forecast with error handling
async function fetchWeatherForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&units=imperial&appid=${API_KEY}`);
        if (!response.ok) throw new Error('Failed to fetch weather forecast data');
        const data = await response.json();

        const forecast = data.list
            .filter((item, index) => index % 8 === 0)
            .slice(0, 3)
            .map(item => ({
                day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
                temp: `${item.main.temp}°F`
            }));
            
        return forecast;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Display weather data with error messages
async function displayWeather() {
    const currentWeather = await fetchCurrentWeather();
    const weatherForecast = await fetchWeatherForecast();

    const currentWeatherContainer = document.querySelector('.current-weather ul');
    const forecastContainer = document.querySelector('.weather-forecast ul');

    if (currentWeather) {
        currentWeatherContainer.innerHTML = `
            <li>Temperature: ${currentWeather.temperature}</li>
            <li>Condition: ${currentWeather.condition}</li>
            <li>High: ${currentWeather.high}</li>
            <li>Low: ${currentWeather.low}</li>
            <li>Humidity: ${currentWeather.humidity}</li>
            <li>Sunrise: ${currentWeather.sunrise}</li>
            <li>Sunset: ${currentWeather.sunset}</li>
        `;
    } else {
        currentWeatherContainer.innerHTML = `<li>Unable to load current weather data.</li>`;
    }

    if (weatherForecast) {
        forecastContainer.innerHTML = weatherForecast.map(forecast => `
            <li>${forecast.day}: ${forecast.temp}</li>
        `).join('');
    } else {
        forecastContainer.innerHTML = `<li>Unable to load weather forecast data.</li>`;
    }
}

// Call the function to display weather data
displayWeather();
