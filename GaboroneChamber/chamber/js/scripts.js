// Replaced with my OpenWeatherMap API key
const API_KEY = '5c7e429e1b20f30b60de00a18bcc0e92';
const CITY = 'Gaborone';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`;

async function fetchWeather() {
    try {
        const response = await fetch(WEATHER_API_URL);
        const data = await response.json();

        if (data.list && data.list.length > 0) {
            const current = data.list[0];
            const temp = current.main.temp.toFixed(0);
            // Capitalize each word in the weather description
            const descriptions = current.weather.map(w => w.description);
            const description = descriptions.map(d => d.replace(/\b\w/g, char => char.toUpperCase())).join(', ');

            // Forecast for the next 3 days
            const forecast = data.list.slice(1, 4).map(day => ({
                date: new Date(day.dt * 1000).toDateString(),
                temp: day.main.temp.toFixed(0) // Ensure zero decimal points
            }));

            // Display all weather events
            const events = descriptions.join(', ');

            document.getElementById('weather-info').innerHTML = `
                <p>Current Temperature: ${temp}°C</p>
                <p>Weather Description: ${description}</p>
                <h3>3-Day Forecast:</h3>
                <ul>
                    ${forecast.map(day => `<li>${day.date}: ${day.temp}°C</li>`).join('')}
                </ul>
                <p>Weather Events: ${events}</p>
            `;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>No weather data available.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

fetchWeather();

// Set the current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModifiedDate').textContent = document.lastModified;

// Fetch and display company spotlights
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const spotlights = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
        const selectedSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightsHtml = selectedSpotlights.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');

        document.getElementById('spotlights').innerHTML = spotlightsHtml;
    } catch (error) {
        console.error('Error fetching member spotlights:', error);
        document.getElementById('spotlights').innerHTML = `<p>Error fetching company spotlights.</p>`;
    }
}

fetchSpotlights();
