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
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const membersData = await response.json();
        return membersData;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function displayMembers() {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear existing content

    const membersData = await fetchMembers();
    
    if (membersData) {
        membersData.forEach(member => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${member.image_icon}" alt="${member.name}" style="width: 100%;">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone_number}</p>
                <p><strong>Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <p>${member.other_info}</p>
            `;
            container.appendChild(card);
        });
    }
}

function toggleView(view) {
    const container = document.getElementById('members-container');
    if (view === 'grid') {
        container.className = 'grid-view';
    } else {
        container.className = 'list-view';
        container.innerHTML = ''; // Clear existing content
        fetchMembers().then(membersData => {
            membersData.forEach(member => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone_number}</p>
                    <p><strong>Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                    <p>${member.other_info}</p>
                `;
                container.appendChild(listItem);
            });
        });
    }
}

document.getElementById('grid-view-btn').addEventListener('click', () => {
    toggleView('grid');
    displayMembers();
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    toggleView('list');
    displayMembers();
});

// Display the current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;
document.getElementById('last-modified-date').textContent = document.lastModified;

// Initial display
displayMembers();
