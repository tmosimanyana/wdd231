async function fetchMembers() {
    try {
        const response = await fetch('scripts/data/members.json'); // Adjust the path if needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json(); // Parse the JSON data
        displayMembers(members); // Call a function to display the data
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayMembers(members) {
    const directoryElement = document.querySelector('.business-directory');
    directoryElement.innerHTML = ''; // Clear any existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            <img src="images/${member.image}" alt="${member.name} Logo" />
            <p>${member.info}</p>
        `;

        directoryElement.appendChild(memberCard); // Append the card to the directory
    });
}

function getMembershipLevel(level) {
    switch (level) {
        case 1:
            return 'Member';
        case 2:
            return 'Silver';
        case 3:
            return 'Gold';
        default:
            return 'Unknown';
    }
}

// Fetch members when the page loads
window.onload = fetchMembers;
// Weather API
async function getWeather() {
    const apiKey = '35177d3eff6951544664f3746d418ea5'; // Replaced with my OpenWeatherMap API key
    const city = 'Timbuktu';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        // Current weather
        const currentWeather = weatherData.list[0];
        const forecast = weatherData.list.slice(1, 4); // Three-day forecast

        document.getElementById('weather-temp').textContent = `${Math.round(currentWeather.main.temp)}°F, ${capitalizeDescription(currentWeather.weather)}`;
        document.getElementById('weather-high-low').textContent = `High: ${Math.round(currentWeather.main.temp_max)}°F, Low: ${Math.round(currentWeather.main.temp_min)}°F`;

        // Displaying forecast
        document.getElementById('forecast-day-1').textContent = `Day 1: ${Math.round(forecast[0].main.temp)}°F, ${capitalizeDescription(forecast[0].weather)}`;
        document.getElementById('forecast-day-2').textContent = `Day 2: ${Math.round(forecast[1].main.temp)}°F, ${capitalizeDescription(forecast[1].weather)}`;
        document.getElementById('forecast-day-3').textContent = `Day 3: ${Math.round(forecast[2].main.temp)}°F, ${capitalizeDescription(forecast[2].weather)}`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function capitalizeDescription(weatherArray) {
    return weatherArray.map(event => event.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(', ');
}

// Fetch and display members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid');
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(members, viewType) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card', viewType);

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.additional_info}</p>
        `;
        container.appendChild(memberCard);
    });
}

// Toggle view between grid and list
document.getElementById('toggleView').addEventListener('click', () => {
    const container = document.getElementById('membersContainer');
    const isGridView = container.classList.contains('grid-view');
    
    if (isGridView) {
        container.classList.remove('grid-view');
        displayMembers(members, 'list');
    } else {
        container.classList.add('grid-view');
        displayMembers(members, 'grid');
    }
});

// Footer dynamic content
const currentYear = new Date().getFullYear();
document.getElementById('footer-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('footer-modified').textContent = lastModified;

// Call functions on page load
window.onload = () => {
    getWeather();
    fetchMembers();
};
