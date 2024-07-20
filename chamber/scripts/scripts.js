// Fetch weather data using OpenWeatherMap API
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API key
    const city = 'Gaborone';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display current temperature and weather description
        const currentTemp = data.list[0].main.temp;
        const currentWeather = data.list[0].weather.map(w => capitalizeWords(w.description)).join(', ');

        document.getElementById('current-temperature').textContent = `${currentTemp.toFixed(0)}°C`;
        document.getElementById('current-weather').textContent = currentWeather;

        // Display three-day forecast
        document.getElementById('day1-temp').textContent = `${data.list[8].main.temp.toFixed(0)}°C`;
        document.getElementById('day2-temp').textContent = `${data.list[16].main.temp.toFixed(0)}°C`;
        document.getElementById('day3-temp').textContent = `${data.list[24].main.temp.toFixed(0)}°C`;

        // Example dates for the forecast
        document.getElementById('day1-date').textContent = new Date(data.list[8].dt * 1000).toLocaleDateString();
        document.getElementById('day2-date').textContent = new Date(data.list[16].dt * 1000).toLocaleDateString();
        document.getElementById('day3-date').textContent = new Date(data.list[24].dt * 1000).toLocaleDateString();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Capitalize each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Load company spotlights from JSON data
async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        // Filter gold and silver members
        const spotlightMembers = members.filter(member => member.membership_level > 1);

        // Randomly select two or three spotlight members
        const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffled.slice(0, 3);

        // Display spotlight members
        const spotlightContainer = document.getElementById('spotlight-members');
        selectedMembers.forEach((member) => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('spotlight-member');

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="spotlight-logo">
                <h4>${member.name}</h4>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level">${member.description}</p>
            `;

            spotlightContainer.appendChild(memberDiv);
        });
    } catch (error) {
        console.error('Error loading member spotlights:', error);
    }
}

// Set copyright year and last modified date in the footer
function setFooterDates() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleDateString();
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    loadSpotlights();
    setFooterDates();
});
