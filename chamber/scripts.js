const WEATHER_API_KEY = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my OpenWeatherMap API key
const WEATHER_CITY = 'Gaborone,BW'; // Chamber location

async function fetchWeatherData() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY}&units=metric&appid=${WEATHER_API_KEY}`);
        const weatherData = await weatherResponse.json();

        // Display current weather
        const temperature = Math.round(weatherData.main.temp);
        const weatherDescription = weatherData.weather.map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1)).join(', ');

        document.getElementById('current-temperature').textContent = `${temperature}°C`;
        document.getElementById('current-weather').textContent = weatherDescription;

        // Fetch 3-day forecast
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${WEATHER_CITY}&units=metric&cnt=24&appid=${WEATHER_API_KEY}`);
        const forecastData = await forecastResponse.json();

        // Group forecast by day
        const forecasts = {};
        forecastData.list.forEach(entry => {
            const date = new Date(entry.dt_txt).toDateString();
            if (!forecasts[date]) {
                forecasts[date] = [];
            }
            forecasts[date].push(entry.main.temp);
        });

        // Get the next 3 days
        const dates = Object.keys(forecasts).slice(0, 3);
        dates.forEach((date, index) => {
            const avgTemp = Math.round(forecasts[date].reduce((a, b) => a + b, 0) / forecasts[date].length);
            document.getElementById(`day${index + 1}-temp`).textContent = `${avgTemp}°C`;
            document.getElementById(`day${index + 1}-date`).textContent = date;
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function fetchSpotlightMembers() {
    try {
        const response = await fetch('data/members.json');
        const membersData = await response.json();

        // Filter Silver and Gold members
        const qualifiedMembers = membersData.filter(member => member.membership_level === 2 || member.membership_level === 3);

        // Randomly select 2 or 3 members
        const selectedMembers = [];
        while (selectedMembers.length < 3 && qualifiedMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
            selectedMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
        }

        // Display selected members
        const spotlightsSection = document.getElementById('spotlights');
        spotlightsSection.innerHTML = selectedMembers.map(member => `
            <div class="spotlight">
                <img src="images/${member.image}" alt="${member.name}" class="spotlight-logo">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    fetchSpotlightMembers();

    // Update footer content
    const today = new Date();
    document.getElementById('currentYear').textContent = today.getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
