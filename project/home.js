// home.js

document.addEventListener('DOMContentLoaded', async () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Weather Data
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API Key
    const city = 'Gaborone'; // Replace with the desired city
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const { temp, weather } = data.main;
        const weatherDescription = weather.map(item => item.description).join(', ').toUpperCase();

        document.querySelector('.weather').innerHTML = `
            <h2>Weather</h2>
            <p>Current Temperature: ${Math.round(temp)}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;

        // Fetch 3-day forecast
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastHtml = forecastData.list.slice(0, 3).map(entry => `
            <p>${new Date(entry.dt_txt).toLocaleDateString()}: ${Math.round(entry.main.temp)}°C</p>
        `).join('');

        document.querySelector('.weather').innerHTML += `
            <h3>3-Day Forecast</h3>
            ${forecastHtml}
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

    // Spotlight Section
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const spotlights = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightHtml = randomSpotlights.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');

        document.querySelector('.spotlights').innerHTML = spotlightHtml;
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
});
