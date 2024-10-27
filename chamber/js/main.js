// Set current year in footer
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Set last modified date in footer
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last updated: ${document.lastModified}`;

// Fetch weather data from OpenWeatherMap API
async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with your OpenWeatherMap API key
    const city = 'Molepolole,Botswana'; // Change as necessary
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        const weatherData = `
            Current Temperature: ${Math.round(data.main.temp)}°C<br>
            Weather: ${data.weather.map(item => item.description.charAt(0).toUpperCase() + item.description.slice(1)).join(', ')}
        `;
        document.getElementById('weather-data').innerHTML = weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-data').textContent = 'Unable to retrieve weather data.';
    }
}

// Fetch company spotlight data from JSON
const directory = [
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


// Function to randomly display spotlight members
function displaySpotlights() {
    const spotlightContainer = document.getElementById('spotlight-container');
    const qualifiedCompanies = companies.filter(company => company.membershipLevel.includes("2") || company.membershipLevel.includes("3"));
    const randomCompanies = [];

    while (randomCompanies.length < 3 && qualifiedCompanies.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedCompanies.length);
        randomCompanies.push(qualifiedCompanies[randomIndex]);
        qualifiedCompanies.splice(randomIndex, 1);
    }

    randomCompanies.forEach(company => {
        const companyDiv = document.createElement('div');
        companyDiv.innerHTML = `
            <h3>${company.name}</h3>
            <img src="${company.image}" alt="${company.name} logo" class="company-image">
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p>${company.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(companyDiv);
    });
}

//
