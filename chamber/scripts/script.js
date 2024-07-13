document.addEventListener('DOMContentLoaded', function() {
    // Update current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Fetch and display weather data
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
    const city = 'Gaborone'; // Chamber location
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const current = data.list[0];
            const forecast = data.list.slice(0, 3);

            document.getElementById('temperature').textContent = `Temperature: ${current.main.temp.toFixed(0)}°C`;
            document.getElementById('weather-description').textContent = `Weather: ${current.weather.map(w => w.description).join(', ').replace(/\b\w/g, char => char.toUpperCase())}`;

            document.getElementById('day1').textContent = `Day 1: ${forecast[0].main.temp.toFixed(0)}°C`;
            document.getElementById('day2').textContent = `Day 2: ${forecast[1].main.temp.toFixed(0)}°C`;
            document.getElementById('day3').textContent = `Day 3: ${forecast[2].main.temp.toFixed(0)}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Fetch and display company spotlights
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const spotlights = data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const selectedSpotlights = [];
            while (selectedSpotlights.length < 3 && spotlights.length) {
                const index = Math.floor(Math.random() * spotlights.length);
                selectedSpotlights.push(spotlights.splice(index, 1)[0]);
            }

            const spotlightsContainer = document.getElementById('spotlights-container');
            selectedSpotlights.forEach(member => {
                const spotlightDiv = document.createElement('div');
                spotlightDiv.className = 'spotlight-item';
                spotlightDiv.innerHTML = `
                    <img src="${member.logo}" alt="${member.companyName} Logo" class="company-logo">
                    <h3 class="company-name">${member.companyName}</h3>
                    <p class="company-phone">Phone: ${member.phone}</p>
                    <p class="company-address">Address: ${member.address}</p>
                    <a href="${member.website}" class="company-website">Website</a>
                    <p class="membership-level">Membership Level: ${member.membershipLevel}</p>
                `;
                spotlightsContainer.appendChild(spotlightDiv);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
});
