// script.members.js

const membersData = [
    // Your JSON data here
];

function getRandomSpotlights() {
    const silverGoldMembers = membersData.filter(member => 
        member.membershipLevel.includes("Level 2") || member.membershipLevel.includes("Level 3")
    );
    
    const spotlights = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        spotlights.push(silverGoldMembers[randomIndex]);
    }

    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = "";
    spotlights.forEach(member => {
        const memberHtml = `
            <div class="spotlight">
                <img src="${member.image}" alt="${member.name} Logo" />
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <a href="#">Visit Website</a>
            </div>
        `;
        spotlightContainer.innerHTML += memberHtml;
    });
}

getRandomSpotlights();
