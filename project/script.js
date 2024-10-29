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
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my OpenWeatherMap API key
    const city = 'Molepolole,BW'; // location to get weather for
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        const currentTemp = Math.round(weatherData.main.temp);
        const weatherDescription = weatherData.weather.map(event => capitalizeWords(event.description)).join(', ');
        
        // Update the weather section in the HTML
        document.getElementById('current-temperature').innerText = `${currentTemp}°C`;
        document.getElementById('weather-description').innerText = weatherDescription;

        //  can also add a three-day forecast here if needed
    } catch (error) {
        console.error('Error fetching weather data:', error);
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
