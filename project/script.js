// script.js

// Update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Fetch weather data and company spotlight data
function fetchWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API key
    const city = 'Molepolole';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather-data');
            const temp = Math.round(data.main.temp); // Round temperature
            const description = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', '); // Capitalize descriptions
            weatherDiv.innerHTML = `<p>Current Temperature: ${temp}°C</p><p>Description: ${description}</p>`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to fetch spotlight data (assumes JSON data source)
function fetchSpotlightData() {
    const spotlightData = [
        { name: 'Company A', logo: 'path/to/logoA.png', phone: '+267 987 6543', address: 'Address A', website: 'https://companyA.com', membership: 'Gold' },
        { name: 'Company B', logo: 'path/to/logoB.png', phone: '+267 654 3210', address: 'Address B', website: 'https://companyB.com', membership: 'Silver' },
        { name: 'Company C', logo: 'path/to/logoC.png', phone: '+267 321 0987', address: 'Address C', website: 'https://companyC.com', membership: 'Gold' }
    ];

    const spotlightDiv = document.getElementById('spotlight-data');
    const selectedCompanies = spotlightData.filter(company => company.membership === 'Gold' || company.membership === 'Silver');
    const randomCompanies = selectedCompanies.sort(() => 0.5 - Math.random()).slice(0, 3); // Randomly select 3 companies

    randomCompanies.forEach(company => {
        spotlightDiv.innerHTML += `
            <div class="company-spotlight">
                <img src="${company.logo}" alt="${company.name} Logo" width="100">
                <h3>${company.name}</h3>
                <p>Phone: ${company.phone}</p>
                <p>Address: ${company.address}</p>
                <p><a href="${company.website}" target="_blank">Visit Website</a></p>
            </div>`;
    });
}

// Call functions to fetch data
fetchWeatherData();
fetchSpotlightData();
