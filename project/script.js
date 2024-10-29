// Function to fetch member data from JSON file
async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json'); // Adjust the path if necessary
        const data = await response.json();
        return data.members; // Return the members array
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display the weather data
async function displayWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API key
    const city = 'Molepolole,BW'; // The city to get weather for
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=-24.5833&lon=25.1833&exclude=minutely,hourly&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        // Current weather data
        const currentTemp = Math.round(weatherData.current.temp);
        const weatherDescription = weatherData.current.weather.map(event => capitalizeWords(event.description)).join(', ');
        
        // Update current weather in the HTML
        document.getElementById('current-temperature').innerText = `${currentTemp}°C`;
        document.getElementById('weather-description').innerText = weatherDescription;

        // Display the three-day forecast
        displayThreeDayForecast(weatherData.daily);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display the three-day forecast
function displayThreeDayForecast(dailyData) {
    const forecastSection = document.getElementById('three-day-forecast');
    forecastSection.innerHTML = ''; // Clear previous forecast

    // Loop through the first three days of the forecast
    for (let i = 1; i <= 3; i++) {
        const dayData = dailyData[i]; // Get the forecast for each day

        // Create an HTML element for each day's forecast
        const forecastDiv = document.createElement('div');
        forecastDiv.className = 'forecast-day';
        
        const date = new Date(dayData.dt * 1000).toLocaleDateString(); // Convert UNIX timestamp to date
        const dayTemp = Math.round(dayData.temp.day); // Day temperature
        const dayWeather = capitalizeWords(dayData.weather.map(event => event.description).join(', '));

        forecastDiv.innerHTML = `
            <h4>${date}</h4>
            <p>Temperature: ${dayTemp}°C</p>
            <p>Weather: ${dayWeather}</p>
        `;

        forecastSection.appendChild(forecastDiv);
    }
}

// Function to capitalize each word in a string
function capitalizeWords(string) {
    return string.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to display spotlight members
async function displaySpotlightMembers() {
    const members = await fetchMemberData();
    const spotlightSection = document.getElementById('spotlight-members');
    
    // Filter for Gold and Silver members
    const filteredMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
    
    // Randomly select 2 to 3 members
    const selectedMembers = getRandomMembers(filteredMembers, 3);
    
    // Create HTML for spotlight members
    selectedMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'spotlight-member';
        
        memberDiv.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" class="member-logo">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Membership Level: ${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        
        spotlightSection.appendChild(memberDiv);
    });
}

// Function to randomly select members
function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Initialize functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayWeather();
    displaySpotlightMembers();
});
