// JavaScript to handle dark mode toggle and sample weather data

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Mock weather data (Replace with actual API if available)
const weatherData = {
    current: {
        temperature: "75°F",
        condition: "Partly Cloudy",
        high: "85°F",
        low: "52°F",
        humidity: "34%",
        sunrise: "7:30am",
        sunset: "9:59pm"
    },
    forecast: [
        { day: "Today", temp: "90°F" },
        { day: "Wednesday", temp: "89°F" },
        { day: "Thursday", temp: "68°F" }
    ]
};

// Populate current weather
const currentWeather = document.querySelector('.current-weather ul');
currentWeather.innerHTML = `
    <li>Temperature: ${weatherData.current.temperature}</li>
    <li>Condition: ${weatherData.current.condition}</li>
    <li>High: ${weatherData.current.high}</li>
    <li>Low: ${weatherData.current.low}</li>
    <li>Humidity: ${weatherData.current.humidity}</li>
    <li>Sunrise: ${weatherData.current.sunrise}</li>
    <li>Sunset: ${weatherData.current.sunset}</li>
`;

// Populate weather forecast
const forecastWeather = document.querySelector('.weather-forecast ul');
forecastWeather.innerHTML = weatherData.forecast.map(forecast => `
    <li>${forecast.day}: ${forecast.temp}</li>
`).join('');
