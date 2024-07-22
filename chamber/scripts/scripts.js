// Define the URLs for the APIs
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Gaborone&appid=5c7e429e1b20f30b60de00a18bcc0e92&units=metric';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Gaborone&appid=5c7e429e1b20f30b60de00a18bcc0e92&units=metric';
const membersUrl = 'path/to/members.json';

// Function to fetch weather data
async function getWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        document.getElementById('current-temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('current-weather').textContent = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');

        await getForecastData();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to fetch forecast data
async function getForecastData() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();

        const forecast = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
        forecast.forEach((item, index) => {
            document.getElementById(`day${index + 1}-date`).textContent = new Date(item.dt_txt).toLocaleDateString();
            document.getElementById(`day${index + 1}-temp`).textContent = `${Math.round(item.main.temp)}°C`;
        });
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Function to fetch member data and display spotlights
async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        
        const spotlights = data.filter(member => member.membership_level === 2 || member.membership_level === 3);
        const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-cards');
        spotlightContainer.innerHTML = ''; // Clear existing content

        randomSpotlights.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight-card');

