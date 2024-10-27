const companyData = [
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

function displayCompanySpotlight() {
    // Filter eligible members for spotlight
    const eligibleMembers = companyData.filter(member =>
        member.membershipLevel === "Membership Level 2" || member.membershipLevel === "Membership Level 3"
    );

    // Randomly select two members for spotlight
    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    // Create HTML for each selected member
    const spotlightHTML = selectedMembers.map(member => `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}" class="member-image" loading="lazy">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `).join('');

    // Insert HTML into spotlight container
    document.getElementById('spotlight-container').innerHTML = spotlightHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    displayCompanySpotlight();
    fetchWeatherData(); // Call the weather data fetching function
});

// Fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with your OpenWeatherMap API key
    const city = 'molepolole'; // location here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Extract relevant weather information
        const temperature = Math.round(data.main.temp); // Rounded temperature
        const weatherDescription = data.weather.map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1)).join(', '); // Capitalized descriptions

        // Create a string for weather display
        const weatherData = `Current Weather: ${weatherDescription}, ${temperature}°C`;
        document.getElementById('weather-data').innerText = weatherData;

        // Forecast (3-day forecast can be fetched separately)
        // Example: Use the forecast endpoint to fetch 3-day data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-data').innerText = 'Failed to load weather data.';
    }
}
