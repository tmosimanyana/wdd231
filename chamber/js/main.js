// chamber-project/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Update year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Fetch and display events
    fetchEvents();

    // Fetch and display weather
    fetchWeather();

    // Fetch and display spotlight companies
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displaySpotlights(data));

    // Other code remains unchanged...
});

async function fetchEvents() {
    // Fetch events from a hypothetical API endpoint
    const events = [
        { date: '2023-08-01', title: 'Tech Conference' },
        { date: '2023-08-15', title: 'Startup Meetup' },
        { date: '2023-08-22', title: 'Networking Event' }
    ];

    const eventsList = document.getElementById('events-list');
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.date}: ${event.title}`;
        eventsList.appendChild(listItem);
    });
}

async function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = 'Gaborone';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const currentWeather = data.list[0];
    const temperature = currentWeather.main.temp.toFixed(0);
    const description = currentWeather.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');

    document.getElementById('temperature').textContent = `Current Temperature: ${temperature}°C`;
    document.getElementById('weather-description').textContent = `Current Weather: ${description}`;

    const forecastContainer = document.getElementById('weather-forecast');
    for (let i = 1; i <= 3; i++) {
        const forecast = data.list[i];
        const forecastTemp = forecast.main.temp.toFixed(0);
        const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
        const forecastDescription = forecast.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');

        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `
            <p>${forecastDate}</p>
            <p>Temperature: ${forecastTemp}°C</p>
            <p>Weather: ${forecastDescription}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    }
}

async function displaySpotlights(members) {
    const spotlights = members.filter(member => member.membership_level >= 2);
    const randomSpotlights = getRandomElements(spotlights, 3);

    const spotlightContainer = document.getElementById('spotlight-companies');
    randomSpotlights.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.className = 'spotlight-card';
        spotlightCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>Membership Level: ${member.membership_level == 2 ? 'Silver' : 'Gold'}</p>
        `;
        spotlightContainer.appendChild(spotlightCard);
    });
}

function getRandomElements(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
