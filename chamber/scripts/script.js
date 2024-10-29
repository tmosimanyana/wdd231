document.addEventListener("DOMContentLoaded", () => {
    // Weather API Integration
    const API_KEY = 'YOUR_API_KEY';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Molepolole,BW&units=metric&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Molepolole,BW&units=metric&appid=${API_KEY}`;

    async function fetchWeather() {
        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();
            document.getElementById('current-temp').textContent = data.main.temp;
            document.getElementById('current-description').textContent = data.weather[0].description;
            document.getElementById('current-humidity').textContent = data.main.humidity;
            document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    async function fetchForecast() {
        try {
            const response = await fetch(forecastUrl);
            const data = await response.json();
            const forecastContainer = document.getElementById('forecast-container');
            forecastContainer.innerHTML = '';
            data.list.slice(0, 3).forEach(item => {
                const dayForecast = document.createElement('div');
                dayForecast.innerHTML = `
                    <p><strong>${new Date(item.dt * 1000).toLocaleDateString()}</strong></p>
                    <p>Temp: ${item.main.temp}°C</p>
                    <p>${item.weather[0].description}</p>
                `;
                forecastContainer.appendChild(dayForecast);
            });
        } catch (error) {
            console.error("Error fetching forecast data:", error);
        }
    }

    // Fetch weather and forecast data
    fetchWeather();
    fetchForecast();

    // Toggle theme functionality
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Load and filter spotlight members from JSON data
    async function loadSpotlight() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const spotlightContainer = document.getElementById('spotlight-container');

        // Filter for gold and silver members and select 2-3 randomly
        const eligibleMembers = members.filter(member => ['gold', 'silver'].includes(member.membershipLevel));
        const randomMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        spotlightContainer.innerHTML = '';
        randomMembers.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('spotlight-member');
            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: <a href="tel:${member.phone}">${member.phone}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            `;
            spotlightContainer.appendChild(memberElement);
        });
    }

    loadSpotlight();
});
