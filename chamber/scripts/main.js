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
    const eligibleMembers = companyData.filter(member =>
        member.membershipLevel === "Membership Level 2" || member.membershipLevel === "Membership Level 3"
    );

    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    const spotlightContainer = document.getElementById('spotlight-container');
    
    spotlightContainer.innerHTML = selectedMembers.map(member => `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}" class="member-image" loading="lazy">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayCompanySpotlight();
    // Fetch weather data (mock function)
    fetchWeatherData();
});

function fetchWeatherData() {
    const weatherData = "Sunny, 25°C"; // Mock data; replace with real API call
    document.getElementById('weather-data').innerText = weatherData;
}
