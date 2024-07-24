// OpenWeatherMap API key and URL
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // replace with your OpenWeatherMap API key
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone,BW&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        updateWeatherSection(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-details').innerHTML = '<p>Error loading weather data.</p>';
    }
}

function updateWeatherSection(data) {
    const weatherDetails = document.getElementById('weather-details');
    const currentWeather = data.list[0];
    const weatherDescription = currentWeather.weather.map(w => w.description).join(', ');

    const weatherHtml = `
        <p>Current Temperature: ${Math.round(currentWeather.main.temp)}°C</p>
        <p>Weather: ${capitalizeWords(weatherDescription)}</p>
        <p>Forecast:</p>
        <ul>
            ${data.list.slice(0, 3).map(forecast => `
                <li>
                    ${new Date(forecast.dt * 1000).toLocaleDateString()}: ${Math.round(forecast.main.temp)}°C
                </li>
            `).join('')}
        </ul>
    `;

    weatherDetails.innerHTML = weatherHtml;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch weather data on page load
fetchWeatherData();

// Fetch member data and display spotlights
async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displaySpotlights(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    const eligibleMembers = members.filter(member => member.membershipLevel >= 2);
    const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 3);

    const spotlightHtml = selectedMembers.map(member => `
        <div class="spotlight-card">
            <img src="images/${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel === 2 ? 'Silver' : 'Gold'}</p>
        </div>
    `).join('');

    spotlightContainer.innerHTML = spotlightHtml;
}

// Fetch member data on page load
fetchMemberData();
