document.addEventListener('DOMContentLoaded', function () {
    const weatherAPIKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone,BW&units=metric&appid=${weatherAPIKey}`;
    const spotlightsEndpoint = 'members.json'; // Adjust the path if needed

    // Update current year and last modified
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Fetch and display weather data
    fetch(weatherEndpoint)
        .then(response => response.json())
        .then(data => {
            const current = data.list[0];
            const forecast = data.list.filter((_, index) => index % 8 === 0); // Get one entry per day

            document.getElementById('current-temp').textContent = `Current Temperature: ${current.main.temp.toFixed(0)}°C`;
            document.getElementById('current-desc').textContent = `Weather: ${current.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}`;

            const forecastContainer = document.getElementById('forecast');
            forecast.forEach(entry => {
                const date = new Date(entry.dt * 1000).toLocaleDateString();
                const temp = entry.main.temp.toFixed(0);
                const desc = entry.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
                forecastContainer.innerHTML += `
                    <div>
                        <h3>${date}</h3>
                        <p>Temp: ${temp}°C</p>
                        <p>${desc}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Fetch and display company spotlights
    fetch(spotlightsEndpoint)
        .then(response => response.json())
        .then(data => {
            const spotlightsContainer = document.getElementById('spotlights-container');
            const filteredMembers = data.members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const randomMembers = [];
            
            while (randomMembers.length < 2 && filteredMembers.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredMembers.length);
                randomMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
            }

            randomMembers.forEach(member => {
                spotlightsContainer.innerHTML += `
                    <div class="spotlight">
                        <img src="${member.logo}" alt="${member.companyName} Logo" class="spotlight-logo">
                        <h3>${member.companyName}</h3>
                        <p>Phone: ${member.phone}</p>
                        <p>Address: ${member.address}</p>
                        <p>Membership Level: ${member.membershipLevel}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching company spotlights:', error));
});
