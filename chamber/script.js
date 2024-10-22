// script.js

// Fetch Weather Data
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your weather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Gaborone&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('weather-description').innerText = data.weather[0].description;
        document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather-humidity').innerText = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Fetch Weather Forecast
async function fetchForecast() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your weather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = '';

        for (let i = 0; i < data.list.length; i += 8) { // Show 3-day forecast
            const listItem = document.createElement('li');
            listItem.innerText = `Forecast: ${data.list[i].main.temp}°C, ${data.list[i].weather[0].description}`;
            forecastList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Fetch Company Spotlight Data
async function fetchCompanySpotlight() {
    const companyData = [
        {
            name: 'BAMB Headquarters',
            logo: 'images/logo.webp',
            address: 'Plot 130, Nkwe Square, G.I.F.P, Gaborone',
            email: 'info@bamb.co.bw',
            phone: '+267 395 1341',
            website: 'https://bamb.co.bw/',
            membershipLevel: 3
        },
        {
            name: 'AgriFeed GICP',
            logo: 'images/agrifeed.webp',
            address: 'Plot 59 Unit 1B, GICP, Gaborone 9999',
            email: 'info@agrifeed.co.bw',
            phone: '+267 390 1851',
            website: 'http://agrifeed.co.bw',
            membershipLevel: 2
        },
        {
            name: 'Greenhouse Technologies',
            logo: 'images/greenhouse.webp',
            address: 'Plot 20689 Sekotlo Rd, Gaborone 9999',
            email: 'info@ghtech.co.za',
            phone: '+267 75 480 600',
            website: 'http://ghtech.co.za',
            membershipLevel: 2
        },
        // Add more companies as needed
    ];

    const spotlightSection = document.getElementById('business-spotlight');
    spotlightSection.innerHTML = '';

    // Randomly select 2 companies with gold/silver membership
    const selectedCompanies = companyData.filter(company => company.membershipLevel <= 2)
                                          .sort(() => 0.5 - Math.random())
                                          .slice(0, 2);

    selectedCompanies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${company.logo}" alt="${company.name} Logo">
            <p><strong>${company.name}</strong></p>
            <p>Address: ${company.address}</p>
            <p>Email: <a href="mailto:${company.email}">${company.email}</a></p>
            <p>Phone: ${company.phone}</p>
            <p>Website: <a href="${company.website}">${company.website}</a></p>
            <p>Membership Level: ${company.membershipLevel}</p>
        `;
        spotlightSection.appendChild(card);
    });
}

// Toggle Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Execute Fetch Functions
fetchWeather();
fetchForecast();
fetchCompanySpotlight();
