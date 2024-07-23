document.addEventListener("DOMContentLoaded", () => {
    loadHTML('header.html', '#header');
    loadHTML('footer.html', '#footer', setupFooter);

    fetchWeatherData();
    displayCompanySpotlights();
    setupResponsiveMenu();
});

function loadHTML(url, selector, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
        });
}

function setupFooter() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}

async function fetchWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e9';
    const city = 'Gaborone';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=4`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);
        
        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayWeatherData(weatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(weatherData, forecastData) {
    const weatherSection = document.querySelector('.weather');
    const currentTemp = Math.round(weatherData.main.temp);
    const weatherDescription = weatherData.weather.map(event => capitalizeWords(event.description)).join(', ');

    weatherSection.innerHTML = `
        <div>
            <h3>Current Temperature</h3>
            <p>${currentTemp}°C</p>
        </div>
        <div>
            <h3>Weather Description</h3>
            <p>${weatherDescription}</p>
        </div>
        <div>
            <h3>3-Day Forecast</h3>
            <ul>
                ${forecastData.list.slice(1).map(day => `
                    <li>${formatDate(day.dt_txt)}: ${Math.round(day.main.temp)}°C</li>
                `).join('')}
            </ul>
        </div>
    `;
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatDate(dateString) {
    const options = { weekday: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

async function displayCompanySpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const spotlightsSection = document.querySelector('.spotlights');
    const eligibleMembers = members.filter(member => member.membership_level > 1);
    const spotlights = [];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        spotlights.push(eligibleMembers.splice(randomIndex, 1)[0]);
    }

    spotlightsSection.innerHTML = spotlights.map(member => `
        <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership_level === 2 ? 'Silver' : 'Gold'}</p>
        </div>
    `).join('');
}

function setupResponsiveMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}
