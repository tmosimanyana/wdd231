// JavaScript for theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Dummy weather API data (5c7e429e1b20f30b60de00a18bcc0e92)
const weatherData = {
    currentTemp: "75°F",
    forecast: ["90°F", "89°F", "68°F"]
};

document.getElementById("currentWeather").textContent = weatherData.currentTemp;
// Sample JSON data for chamber members (replaced this with actual fetch from my JSON file)
const members = [
    {
        "name": "BAMB Headquarters",
        "address": "123 BAMB Rd, Kweneng",
        "phone": "+267 123 4567",
        "image": "images/bamb.webp",
        "membershipLevel": "Gold"
    },
    {
        "name": "AgriFeed GICP",
        "address": "456 Agri Rd, Kweneng",
        "phone": "+267 765 4321",
        "image": "images/agrifeed.webp",
        "membershipLevel": "Silver"
    },
    {
        "name": "Greenhouse Technologies",
        "address": "789 Greenhouse Ave, Kweneng",
        "phone": "+267 111 2222",
        "image": "images/greenhouse.webp",
        "membershipLevel": "Silver"
    },
    {
        "name": "AFGRI Equipment",
        "address": "321 AFGRI St, Kweneng",
        "phone": "+267 333 4444",
        "image": "images/afgri.webp",
        "membershipLevel": "Gold"
    },
    {
        "name": "Hydrocon Green",
        "address": "654 Hydrocon Way, Kweneng",
        "phone": "+267 555 6666",
        "image": "images/hydrocon.webp",
        "membershipLevel": "Bronze"
    },
    {
        "name": "Sediba - VFM",
        "address": "987 Sediba Rd, Kweneng",
        "phone": "+267 777 8888",
        "image": "images/sediba.webp",
        "membershipLevel": "Bronze"
    }
];

// Function to get random business spotlights
function getRandomSpotlights(data, count) {
    // Filter members for Gold and Silver membership levels
    const filteredMembers = data.filter(member =>
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );

    // Shuffle the filtered members array
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    
    // Select the first 'count' members from the shuffled array
    return shuffled.slice(0, count);
}

// Function to render the business spotlight cards
function renderSpotlights(spotlights) {
    const spotlightContainer = document.getElementById('businessSpotlightContent');
    spotlightContainer.innerHTML = ''; // Clear previous content

    spotlights.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(card);
    });
}

// Get three random business spotlights and render them
const randomSpotlights = getRandomSpotlights(members, 3);
renderSpotlights(randomSpotlights);
