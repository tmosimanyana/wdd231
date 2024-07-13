document.addEventListener('DOMContentLoaded', function () {
    // Update the current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Weather API Integration
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Gaborone'; // Change to your desired city

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather-info');
            const current = data.list[0];
            const forecast = data.list.slice(1, 4);

            weatherDiv.innerHTML = `
                <p><strong>Temperature:</strong> ${Math.round(current.main.temp)}°C</p>
                <p><strong>Description:</strong> ${current.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}</p>
                <h3>3-Day Forecast:</h3>
                <ul>
                    ${forecast.map(f => `
                        <li>
                            <strong>${new Date(f.dt_txt).toLocaleDateString()}</strong>: ${Math.round(f.main.temp)}°C, ${f.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}
                        </li>
                    `).join('')}
                </ul>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Company Spotlights
    const spotlights = [
        {
            name: 'Company A',
            logo: 'images/logo-a.png',
            phone: '123-456-7890',
            address: '123 Main St',
            website: 'http://www.companya.com',
            membership: 'Gold'
        },
        {
            name: 'Company B',
            logo: 'images/logo-b.png',
            phone: '987-654-3210',
            address: '456 Elm St',
            website: 'http://www.companyb.com',
            membership: 'Silver'
        },
        // Add more companies as needed
    ];

    function getRandomSpotlights() {
        const shuffled = spotlights.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    const spotlightDiv = document.getElementById('spotlights');
    const selectedSpotlights = getRandomSpotlights();

    spotlightDiv.innerHTML = selectedSpotlights.map(spotlight => `
        <div class="spotlight">
            <img src="${spotlight.logo}" alt="${spotlight.name} Logo" class="spotlight-logo">
            <h3>${spotlight.name}</h3>
            <p><strong>Phone:</strong> ${spotlight.phone}</p>
            <p><strong>Address:</strong> ${spotlight.address}</p>
            <p><strong>Membership Level:</strong> ${spotlight.membership}</p>
            <a href="${spotlight.website}" target="_blank">Visit Website</a>
        </div>
    `).join('');
});
