// main.js

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with  actual OpenWeatherMap API key
    const city = 'Gaborone,Botswana';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const weatherDesc = data.weather[0].description;

    document.getElementById('currentTemp').textContent = `Temperature: ${temp}°C`;
    document.getElementById('weatherDesc').textContent = `Description: ${capitalizeWords(weatherDesc)}`;

    // Forecast can be implemented with another API call if needed
}

// Helper function to capitalize each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to fetch member data from JSON
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Path to your JSON file
        const members = await response.json();
        displaySpotlightMembers(members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Function to display spotlight members
function displaySpotlightMembers(members) {
    const spotlightMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
    const selectedMembers = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    const membersContainer = document.getElementById('membersContainer');
    selectedMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-card';
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.tagline}</p>
            <p>Contact: ${member.phone}</p>
            <a href="${member.website}">Visit Website</a>
        `;
        membersContainer.appendChild(memberDiv);
    });
}

// Initialize data fetching
fetchWeather();
fetchMembers();
