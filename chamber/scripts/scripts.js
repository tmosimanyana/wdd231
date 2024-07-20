// My OpenWeatherMap API key
const API_KEY = '5c7e429e1b20f30b60de00a18bcc0e92';
const LOCATION = 'Gaborone,BW'; // Chamber location

// Function to capitalize each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to fetch and display weather data
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${LOCATION}&units=metric&appid=${API_KEY}`);
        const data = await response.json();

        // Current weather
        const currentWeather = data.list[0];
        const currentTemperature = Math.round(currentWeather.main.temp);
        const weatherDescription = capitalizeWords(currentWeather.weather.map(w => w.description).join(', '));

        document.getElementById('current-temperature').textContent = `${currentTemperature}°C`;
        document.getElementById('current-weather').textContent = weatherDescription;

        // 3-day forecast
        const forecast = data.list.slice(0, 3);
        forecast.forEach((item, index) => {
            const date = new Date(item.dt_txt).toLocaleDateString();
            const temp = Math.round(item.main.temp);
            document.getElementById(`day${index + 1}-date`).textContent = date;
            document.getElementById(`day${index + 1}-temp`).textContent = `${temp}°C`;
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to fetch and display spotlight companies
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const spotlightMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
        const randomSpotlights = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightsContainer = document.getElementById('spotlights');
        spotlightsContainer.innerHTML = '';

        randomSpotlights.forEach(member => {
            const spotlightElement = document.createElement('div');
            spotlightElement.classList.add('spotlight');

            spotlightElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo" class="spotlight-logo">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
            `;

            spotlightsContainer.appendChild(spotlightElement);
        });
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
}

// Function to display current year and last modified date
function displayFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('lastModified').textContent = lastModifiedDate;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlights();
    displayFooterInfo();
});
