// Weather API Key
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'Gaborone';

// Fetch Weather Data
function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
            const description = data.weather[0].description;

            document.getElementById('weather-data').innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Fetch Company Spotlights
const companies = [
    {"name": "Business 1", "membership": "gold"},
    {"name": "Business 2", "membership": "silver"},
    {"name": "Business 3", "membership": "bronze"}
];

function fetchSpotlights() {
    const filtered = companies.filter(c => c.membership === 'gold' || c.membership === 'silver');
    const spotlights = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    document.getElementById('company-spotlights').innerHTML = spotlights.map(b => `<div>${b.name}</div>`).join('');
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlights();
});

