// Fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = 'your_openweathermap_api_key';
    const city = 'Timbuktu'; // Adjust city name as needed
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display current weather
        const currentWeather = data.list[0];
        document.getElementById('weather-data').innerHTML = `
            <p>Temperature: ${currentWeather.main.temp.toFixed(0)}°C</p>
            <p>Description: ${currentWeather.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</p>
            <h3>3-Day Forecast:</h3>
            <ul>
                ${data.list.slice(0, 3).map(item => `
                    <li>${new Date(item.dt * 1000).toLocaleDateString()}: ${item.main.temp.toFixed(0)}°C, ${item.weather[0].description.replace(/\b\w/g, char => char.toUpperCase())}</li>
                `).join('')}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch company spotlight data from JSON file
async function fetchCompanySpotlight() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const spotlight = data.filter(member => member.membership_level > 1); // Filter for Silver and Gold members
        const randomSpotlights = spotlight.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = randomSpotlights.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membership_level === 2 ? 'Silver' : 'Gold'}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching company spotlight data:', error);
    }
}

// Set current year and last modified date
function setFooterDates() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModifiedDate').textContent = document.lastModified;
}

// Initialize functions
fetchWeather();
fetchCompanySpotlight();
setFooterDates();

