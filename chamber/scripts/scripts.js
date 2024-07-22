// Fetch and display weather data
async function fetchWeatherData() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'Gaborone';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch current weather data
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);

        // Fetch 3-day forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    // Capitalize each word in the description
    const weatherDescription = data.weather.map(desc => desc.description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(', ');

    temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
    description.textContent = `Description: ${weatherDescription}`;
}

function displayForecast(data) {
    const forecast = document.getElementById('forecast');
    const forecastDays = ['Today', 'Tomorrow', 'Day After Tomorrow'];
    
    forecast.innerHTML = '<h3>3-Day Forecast</h3>';
    let dayCount = 0;

    // Iterate over forecast data
    data.list.forEach(entry => {
        if (dayCount >= 3) return; // Stop after 3 days

        const date = new Date(entry.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(entry.main.temp);

        // Add forecast info to the forecast section
        forecast.innerHTML += `
            <p>${forecastDays[dayCount]} (${dayOfWeek}): ${temp}°C, ${capitalizeEachWord(entry.weather.map(desc => desc.description).join(', '))}</p>
        `;

        dayCount++;
    });
}

// Capitalize each word in a string
function capitalizeEachWord(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch and display company data
async function fetchCompanyData() {
    const url = 'data/members.json';

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCompanies(data);
    } catch (error) {
        console.error('Error fetching company data:', error);
    }
}

function displayCompanies(companies) {
    const spotlightCards = document.getElementById('spotlight-cards');
    spotlightCards.innerHTML = ''; // Clear existing content

    // Filter companies by membership level (Gold and Silver)
    const filteredCompanies = companies.filter(company => company.membership_level === 2 || company.membership_level === 3);

    // Shuffle the array and select 2-3 companies
    const shuffledCompanies = filteredCompanies.sort(() => 0.5 - Math.random());
    const selectedCompanies = shuffledCompanies.slice(0, 3);

    selectedCompanies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('company-card');

        card.innerHTML = `
            <img src="images/${company.image}" alt="${company.name} logo">
            <h3>${company.name}</h3>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <p><strong>Membership Level:</strong> ${company.description}</p>
        `;

        spotlightCards.appendChild(card);
    });
}

// Toggle view mode
function toggleView() {
    const spotlightCards = document.getElementById('spotlight-cards');
    spotlightCards.classList.toggle('grid-view');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    fetchCompanyData();

    // Set the copyright year and last modified date
    const currentYear = new Date().getFullYear();
    document.querySelector('footer').innerHTML += `<p>&copy; ${currentYear} Gaborone Chamber of Commerce. All rights reserved.</p>`;
    document.getElementById('last-modified-date').textContent = document.lastModified;

    // Add event listener for view toggle
    document.getElementById('view-toggle').addEventListener('click', toggleView);
});

