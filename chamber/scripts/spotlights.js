// scripts/spotlights.js

export async function fetchSpotlightMembers(dataUrl) {
    try {
        const response = await fetch(dataUrl);
        const members = await response.json();
        const spotlightMembers = getRandomMembers(members, ["Gold", "Silver"], 3);
        displaySpotlight(spotlightMembers);
    } catch (error) {
        console.error("Error fetching spotlight members:", error);
    }
}

function getRandomMembers(members, levels, count) {
    const filteredMembers = members.filter(member => levels.includes(member.membershipLevel));
    return filteredMembers.sort(() => 0.5 - Math.random()).slice(0, count);
}

function displaySpotlight(members) {
    const spotlightContainer = document.querySelector('.spotlight');

    spotlightContainer.innerHTML = members.map(member => `
        <div class="spotlight-member">
            <img src="${member.logo}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `).join("");
}
