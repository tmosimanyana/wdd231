const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with your API key
const chamberLocation = { lat: -24.654, lon: 25.908 }; // Replaced with the actual location coordinates

// Fetch Weather Data
async function fetchWeatherData() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${chamberLocation.lat}&lon=${chamberLocation.lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        displayCurrentWeather(data);
        displayForecast(data);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayCurrentWeather(data) {
    const currentWeather = data.list[0];
    document.getElementById('current-temp').textContent = `${Math.round(currentWeather.main.temp)}°C`;
    document.getElementById('current-description').textContent = capitalizeWords(currentWeather.weather.map(event => event.description).join(', '));
    document.getElementById('current-humidity').textContent = `${currentWeather.main.humidity}%`;

    const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.city.sunset * 1000).toLocaleTimeString();
    document.getElementById('sunrise').textContent = sunrise;
    document.getElementById('sunset').textContent = sunset;
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    for (let i = 8; i <= 24; i += 8) {
        const forecast = data.list[i];
        const temp = Math.round(forecast.main.temp);
        const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

        const forecastElement = document.createElement('div');
        forecastElement.innerHTML = `<strong>${date}:</strong> ${temp}°C`;
        forecastContainer.appendChild(forecastElement);
    }
}

// Capitalize each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Member Spotlight
const members = [
    { "name": "BAMB Headquarters", "address": "123 BAMB Rd, Kweneng", "phone": "+267 123 4567", "image": "images/bamb.webp", "membershipLevel": "Gold", "website": "https://example.com" },
    { "name": "AgriFeed GICP", "address": "456 Agri Rd, Kweneng", "phone": "+267 765 4321", "image": "images/agrifeed.webp", "membershipLevel": "Silver", "website": "https://example.com" },
    // Add more members as needed
];

function getRandomSpotlightMembers() {
    const eligibleMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
    eligibleMembers.sort(() => Math.random() - 0.5);
    return eligibleMembers.slice(0, 3);
}

function displaySpotlightMembers() {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';

    const spotlightMembers = getRandomSpotlightMembers();
    spotlightMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'spotlight-member';
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" class="member-logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightContainer.appendChild(memberElement);
    });
}

// Initialize the page
window.onload = () => {
    fetchWeatherData();
    displaySpotlightMembers();
};
