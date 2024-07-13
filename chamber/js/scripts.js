document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    fetchWeatherData();
    fetchCompanySpotlights();
});

function fetchWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Gaborone';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temperature = data.main.temp.toFixed(0);
    const descriptions = data.weather.map(item => capitalizeWords(item.description)).join(', ');

    let weatherHTML = `
        <p>Current Temperature: ${temperature}°C</p>
        <p>Weather Description: ${descriptions}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function fetchCompanySpotlights() {
    const url = 'data/members.json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCompanySpotlights(data.members);
        })
        .catch(error => {
            console.error('Error fetching company data:', error);
        });
}

function displayCompanySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    const goldAndSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
    const selectedMembers = getRandomMembers(goldAndSilverMembers, 3);

    let spotlightsHTML = '';
    selectedMembers.forEach(member => {
        spotlightsHTML += `
            <div class="spotlight">
                <img src="${member.logo}" alt="${member.companyName} Logo">
                <h3>${member.companyName}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;
    });

    spotlightsContainer.innerHTML = spotlightsHTML;
}

function getRandomMembers(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
