async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter Gold and Silver members
    const eligibleMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');

    // Randomly select two or three members
    const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    const spotlightContainer = document.querySelector('.spotlight-container');
    spotlightContainer.innerHTML = shuffledMembers.map(member => `
        <div class="spotlight">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membership}</p>
        </div>
    `).join('');
}
loadSpotlights();
