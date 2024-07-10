// Update year and modification date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('mod-date').textContent = document.lastModified;

// Fetch and display weather data
async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = 'Gaborone';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherContent = document.getElementById('weather-content');
        weatherContent.innerHTML = `
            <p>Temperature: ${Math.round(data.main.temp)}°C</p>
            <p>Description: ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
fetchWeather();

// Fetch and display company spotlights
const spotlights = [
    // Add spotlight data here
];

function displaySpotlights() {
    const spotlightContainer = document.getElementById('spotlight-container');
    let spotlightHTML = '';

    spotlights.forEach(spotlight => {
        spotlightHTML += `
            <div class="spotlight">
                <img src="images/${spotlight.logo}" alt="${spotlight.name}" class="spotlight-logo">
                <h3>${spotlight.name}</h3>
                <p>${spotlight.description}</p>
            </div>
        `;
    });

    spotlightContainer.innerHTML = spotlightHTML;
}
displaySpotlights();
