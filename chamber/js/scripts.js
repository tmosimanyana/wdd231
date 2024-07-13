document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your actual API key
    const city = 'Gaborone,BW'; // Change this to your city

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Process weather data
            const currentWeather = data.list[0];
            const forecast = data.list.filter((_, index) => index % 8 === 0); // 3-day forecast, every 8 hours

            document.getElementById('weather-info').innerHTML = `
                <h3>Current Temperature: ${Math.round(currentWeather.main.temp)}°C</h3>
                <h4>Weather Description: ${currentWeather.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}</h4>
                <h3>3-Day Forecast:</h3>
                <ul>
                    ${forecast.map(f => `
                        <li>
                            <strong>${new Date(f.dt * 1000).toLocaleDateString()}</strong>: ${Math.round(f.main.temp)}°C, ${f.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}
                        </li>
                    `).join('')}
                </ul>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = 'Error loading weather data.';
        });

    // Fetch company spotlights
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const qualifiedMembers = data.members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const spotlights = [];
            
            while (spotlights.length < 3 && qualifiedMembers.length) {
                const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
                const selected = qualifiedMembers.splice(randomIndex, 1)[0];
                spotlights.push(selected);
            }

            document.getElementById('spotlights-container').innerHTML = spotlights.map(member => `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.companyName} Logo">
                    <h3>${member.companyName}</h3>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching company spotlights:', error);
            document.getElementById('spotlights-container').innerHTML = 'Error loading company spotlights.';
        });

    // Update footer with current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();
});
