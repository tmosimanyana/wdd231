// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
    // Path to your JSON data file
    const dataUrl = 'chamber\data\members.json';

    // Function to fetch member data
    async function fetchMemberData() {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data.filter(member => 
            member.membershipLevel.toLowerCase().includes("silver") || 
            member.membershipLevel.toLowerCase().includes("gold")
        );
    }

    // Function to randomly select spotlight members
    function getRandomSpotlights(members, count) {
        const shuffled = [...members].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Function to render spotlights
    function renderSpotlights(members) {
        const spotlightContainer = document.getElementById("spotlight-section");
        spotlightContainer.innerHTML = ""; // Clear existing spotlights

        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("spotlight");

            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(memberElement);
        });
    }

    // Main function to initialize the spotlight display
    async function displaySpotlight() {
        const members = await fetchMemberData();
        const spotlights = getRandomSpotlights(members, 2 + Math.floor(Math.random() * 2)); // Select 2 or 3
        renderSpotlights(spotlights);
    }

    displaySpotlight();
});
