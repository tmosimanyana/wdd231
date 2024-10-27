// JavaScript for Kweneng Agriculture Chamber of Commerce

// Sample data for company spotlight
const members = [
    {
        "name": "BAMB Headquarters",
        "address": "123 BAMB Rd, Kweneng",
        "phone": "+267 123 4567",
        "image": "images/bamb.webp",
        "membershipLevel": "Membership Level 3"
    },
    {
        "name": "AgriFeed GICP",
        "address": "456 Agri Rd, Kweneng",
        "phone": "+267 765 4321",
        "image": "images/agrifeed.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "Greenhouse Technologies",
        "address": "789 Greenhouse Ave, Kweneng",
        "phone": "+267 111 2222",
        "image": "images/greenhouse.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "AFGRI Equipment",
        "address": "321 AFGRI St, Kweneng",
        "phone": "+267 333 4444",
        "image": "images/afgri.webp",
        "membershipLevel": "Membership Level 3"
    },
    {
        "name": "Hydrocon Green",
        "address": "654 Hydrocon Way, Kweneng",
        "phone": "+267 555 6666",
        "image": "images/hydrocon.webp",
        "membershipLevel": "Membership Level 1"
    },
    {
        "name": "Sediba - VFM",
        "address": "987 Sediba Rd, Kweneng",
        "phone": "+267 777 8888",
        "image": "images/sediba.webp",
        "membershipLevel": "Membership Level 1"
    },
    {
        "name": "Notwane Poultry",
        "address": "543 Notwane Rd, Kweneng",
        "phone": "+267 999 0000",
        "image": "images/notwane.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "Agrichem",
        "address": "210 Agrichem St, Kweneng",
        "phone": "+267 333 2222",
        "image": "images/agrichem.webp",
        "membershipLevel": "Membership Level 1"
    }
];

// Function to display company spotlight information
function displayCompanySpotlight() {
    const spotlightContainer = document.getElementById('spotlight-container');
    companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('company-card');
        card.innerHTML = `
            <img src="${company.image}" alt="${company.name}" />
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p>${company.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(card);
    });
}

// Function to fetch weather data
async function fetchWeather() {
    const apiKey = 'dd06ad9a935ec994d44179b8b6867bca'; // Replace with your actual API key
    const city = 'molepolole'; // Changed to the appropriate city if needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data could not be fetched.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-data').textContent = 'Failed to load weather data.';
        console.error('Error fetching weather data:', error);
    }
}

// Function to display fetched weather data
function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-data');
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `
        <strong>${temperature}°C</strong> - ${description.charAt(0).toUpperCase() + description.slice(1)}
    `;
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    displayCompanySpotlight(); // Load company spotlight on page load
    fetchWeather(); // Fetch weather data on page load
});
