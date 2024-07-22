const weatherApiKey = 'YOUR_API_KEY';
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone&units=metric&appid=${weatherApiKey}`;
const memberDataUrl = 'chamber/data/members.json';

// Get weather data
async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const weatherContainer = document.querySelector('.weather');
        const current = data.list[0];
        let forecast = '<ul>';
        data.list.slice(0, 3).forEach(day => {
            forecast += `<li>${new Date(day.dt * 1000).toLocaleDateString()}: ${Math.round(day.main.temp)}°C, ${day.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}</li>`;
        });
        forecast += '</ul>';
        weatherContainer.innerHTML = `
            <p>Current temperature: ${Math.round(current.main.temp)}°C</p>
            <p>Weather: ${current.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}</p>
            <h3>3-Day Forecast:</h3>
            ${forecast}
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Get member data
async function getMembers() {
    try {
        const response = await fetch(memberDataUrl);
        const members = await response.json();
        const spotlightsContainer = document.getElementById('spotlights-container');
        const spotlightMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
        const shuffled = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightsContainer.innerHTML = shuffled.map(member => `
            <div class="spotlight-card">
                <img src="chamber/images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Update last modified date
function updateLastModified() {
    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getMembers();
    updateLastModified();
});
