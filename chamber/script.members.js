const spotlightContainer = document.getElementById("spotlight-container");

// Simulated data for member companies
const memberData = [
    {
        name: "Notwane Poultry",
        phone: "+267 999 0000",
        address: "543 Notwane Rd, Kweneng",
        membershipLevel: "Membership Level 2",
        image: "images/notwane-poultry.webp",
        website: "#"
    },
    {
        name: "Greenhouse Technologies",
        phone: "+267 111 2222",
        address: "789 Greenhouse Ave, Kweneng",
        membershipLevel: "Membership Level 2",
        image: "images/greenhouse-technologies.webp",
        website: "#"
    },
    {
        name: "BAMB Headquarters",
        phone: "+267 123 4567",
        address: "123 BAMB Rd, Kweneng",
        membershipLevel: "Membership Level 3",
        image: "images/bamb-headquarters.webp",
        website: "#"
    }
];

// Populate spotlights section with member data
function loadMemberSpotlights() {
    memberData.forEach(member => {
        const spotlightItem = document.createElement("div");
        spotlightItem.classList.add("spotlight-item");
        spotlightItem.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <a href="${member.website}">Visit Website</a>
        `;
        spotlightContainer.appendChild(spotlightItem);
    });
}

// Load member spotlights on page load
document.addEventListener("DOMContentLoaded", loadMemberSpotlights);
