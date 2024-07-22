const membersURL = 'data/members.json'; // Path to your JSON data file
const weatherAPIKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my  OpenWeatherMap API key
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone&units=metric&appid=${weatherAPIKey}`;

const getSpotlightData = async () => {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displaySpotlights(data);
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
};

const displaySpotlights = (data) => {
    // Filter Gold and Silver members
    const qualifiedMembers = data.filter(member => member.membership_level === 2 || member.membership_level === 3);
    
    // Shuffle and select 2 or 3 members
    const spotlightMembers = [];
    while (spotlightMembers.length < 3 && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        spotlightMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    const spotlightsSection = document.getElementById('spotlights');
    spotlightsSection.innerHTML = ''; // Clear any previous content

    spotlightMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const logo = document.createElement('img');
        logo.setAttribute('src', `images/${member.image}`);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const website = document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Visit Website';

        const membership = document.createElement('p');
        membership.textContent = `Membership Level: ${member.description}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);

        spotlightsSection.appendChild(card);
    });
};

const fetchWeatherData = async () => {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

const displayWeather = (data) => {
    const currentTemperature = document.getElementById('current-temperature');
    const currentWeather = document.getElementById('current-weather');
    const day1Date = document.getElementById('day1-date');
    const day1Temp = document.getElementById('day1-temp');
    const day2Date = document.getElementById('day2-date');
    const day2Temp = document.getElementById('day2-temp');
    const day3Date = document.getElementById('day3-date');
    const day3Temp = document.getElementById('day3-temp');

    const { list } = data;
    if (list.length) {
        const today = list[0];
        currentTemperature.textContent = `${Math.round(today.main.temp)}°C`;
        currentWeather.textContent = today.weather.map(event => event.description.replace(/\b\w/g, char => char.toUpperCase())).join(', ');

        // Assuming that list[8], list[16], list[24] are daily forecasts
        const forecastDays = [list[8], list[16], list[24]];

        forecastDays.forEach((forecast, index) => {
            const date = new Date(forecast.dt_txt).toDateString();
            const temp = Math.round(forecast.main.temp);
            switch (index) {
                case 0:
                    day1Date.textContent = date;
                    day1Temp.textContent = `${temp}°C`;
                    break;
                case 1:
                    day2Date.textContent = date;
                    day2Temp.textContent = `${temp}°C`;
                    break;
                case 2:
                    day3Date.textContent = date;
                    day3Temp.textContent = `${temp}°C`;
                    break;
            }
        });
    }
};

// Initialize
getSpotlightData();
fetchWeatherData();

// Update footer with current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
