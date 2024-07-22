const weatherApiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=-24.6569&lon=25.9080&units=metric&exclude=minutely,hourly,alerts&appid=${weatherApiKey}`;
const spotlightDataUrl = 'path_to_your_json_file.json'; // Update with the path to your JSON data

// Fetch and display weather data
async function getWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Current weather
        const currentTemperature = data.current.temp.toFixed(0);
        const currentWeather = data.current.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');

        document.getElementById('current-temperature').textContent = `${currentTemperature}°C`;
        document.getElementById('current-weather').textContent = currentWeather;

        // 3-Day Forecast
        for (let i = 1; i <= 3; i++) {
            const date = new Date(data.daily[i].dt * 1000).toLocaleDateString();
            const temp = data.daily[i].temp.day.toFixed(0);
            document.getElementById(`day${i}-date`).textContent = date;
            document.getElementById(`day${i}-temp`).textContent = `${temp}°C`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch and display spotlight data
async function getSpotlightData() {
    try {
        const response = await fetch(spotlightDataUrl);
        const data = await response.json();

        // Filter for Gold and Silver members
        const filteredMembers = data.filter(member => member.membership_level === 1 || member.membership_level === 2);

        // Randomly select 2 or 3 members
        const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());
        const spotlightMembers = shuffledMembers.slice(0, 3);

        const spotlightsContainer = document.getElementById('spotlights');

        spotlightMembers.forEach(member => {
            const card = document.createElement('section');
            card.className = 'spotlight-card';

            const img = document.createElement('img');
            img.setAttribute('src', `images/${member.image}`);
            img.setAttribute('alt', `Logo of ${member.name}`);
            img.setAttribute('loading', 'lazy');

            const details = document.createElement('div');

            const name = document.createElement('h3');
            name.textContent = member.name;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;

            const address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;

            const website = document.createElement('a');
            website.setAttribute('href', member.website);
            website.setAttribute('target', '_blank');
            website.textContent = 'Visit Website
            website.textContent = 'Visit Website';

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.description}`;

            details.appendChild(name);
            details.appendChild(phone);
            details.appendChild(address);
            details.appendChild(website);
            details.appendChild(membershipLevel);

            card.appendChild(img);
            card.appendChild(details);

            spotlightsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
}

// Initialize page
function initializePage() {
    getWeatherData();
    getSpotlightData();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();
}

initializePage();
