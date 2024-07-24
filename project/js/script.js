// Function to set the current year and last modified date in the footer
function updateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
}

// Fetch member spotlights from the JSON file
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }

        const spotlightContainer = document.getElementById('spotlight-container');
        const goldOrSilverMembers = data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
        const randomSpotlights = goldOrSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        if (randomSpotlights.length === 0) {
            spotlightContainer.innerHTML = '<p>No members to display.</p>';
            return;
        }

        randomSpotlights.forEach(member => {
            spotlightContainer.innerHTML += `
                <div class="spotlight-card">
                    <img src="${member.logo}" alt="${member.companyName} Logo" loading="lazy">
                    <h3>${member.companyName}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching member spotlights:', error);
        document.getElementById('spotlight-container').innerHTML = '<p>Error loading member spotlights.</p>';
    }
}

// Fetch weather data from the API
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my actual API key
    const city = 'Gaborone'; // Replaced with the city for which I want to fetch the weather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.main) {
            document.getElementById('weather-details').innerHTML = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById('weather-details').innerHTML = '<p>Error loading weather data.</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-details').innerHTML = '<p>Error loading weather data.</p>';
    }
}

// Initialize functions
updateFooter();
fetchSpotlights();
fetchWeather();
