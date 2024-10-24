// JSON data for chamber members (example)
const members = [
    {
        name: "Agrichem",
        logo: "images/agrichem.webp",
        phone: "123-456-7890",
        address: "123 Green Street, Kweneng",
        website: "http://agrichem.com",
        membership: "Gold"
    },
    {
        name: "Notwane Farming Co.",
        logo: "images/notwane.webp",
        phone: "098-765-4321",
        address: "456 Farm Road, Kweneng",
        website: "http://notwane.com",
        membership: "Silver"
    },
    {
        name: "HydroCon Agriculture",
        logo: "images/hydrocon.webp",
        phone: "555-555-5555",
        address: "789 Hydro Lane, Kweneng",
        website: "http://hydrocon.com",
        membership: "Gold"
    }
];

// Filter and randomly select members who are Gold or Silver
const spotlightMembers = members.filter(member => ['Gold', 'Silver'].includes(member.membership));

// Shuffle and pick 2-3 random members for spotlight
const selectedSpotlights = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

// Display the selected members in the spotlight section
const spotlightGrid = document.querySelector('.spotlight-grid');
selectedSpotlights.forEach(member => {
    const memberHTML = `
        <div class="spotlight-item">
            <img src="${member.logo}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membership}</p>
        </div>
    `;
    spotlightGrid.innerHTML += memberHTML;
});
