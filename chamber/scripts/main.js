// main.js

// Update footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather Data using OpenWeatherMap API
const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
const location = 'Molepolole,BW';

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const currentWeather = data.list[0];
    const forecast = data.list.slice(1, 4);

    document.querySelector('.weather-widget').innerHTML = `
        <p>${currentWeather.weather.map(w => w.description).join(', ').replace(/\b\w/g, c => c.toUpperCase())}, ${Math.round(currentWeather.main.temp)}°C</p>
        <p>Forecast: ${forecast.map(f => `${new Date(f.dt_txt).toLocaleDateString()} - ${Math.round(f.main.temp)}°C`).join(', ')}</p>
    `;
}
fetchWeather();

// Spotlight functionality
const spotlightsContainer = document.getElementById("spotlightGrid");

async function loadSpotlights() {
    const response = await fetch('path/to/members.json');
    const members = await response.json();
    const goldSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
    
    const randomSpotlights = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    randomSpotlights.forEach(member => {
        const spotlight = document.createElement("div");
        spotlight.classList.add("member-card");
        spotlight.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Level: ${member.membershipLevel}</p>
        `;
        spotlightsContainer.appendChild(spotlight);
    });
}
loadSpotlights();
