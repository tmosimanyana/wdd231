// spotlights.js
document.addEventListener('DOMContentLoaded', function() {
    const spotlightSection = document.getElementById('spotlights-content');
    const members = [
        {
            "name": "Company A",
            "logo": "path-to-logo-a.jpg",
            "phone": "+123456789",
            "address": "123 Main St, City, Country",
            "website": "https://companyA.com",
            "membership": "Gold"
        },
        {
            "name": "Company B",
            "logo": "path-to-logo-b.jpg",
            "phone": "+987654321",
            "address": "456 Another St, City, Country",
            "website": "https://companyB.com",
            "membership": "Silver"
        }
        // Add more companies as needed
    ];

    const qualifiedMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
    const randomSpotlights = [];

    while (randomSpotlights.length < 3 && qualifiedMembers.length > 0) {
        const index = Math.floor(Math.random() * qualifiedMembers.length);
        randomSpotlights.push(qualifiedMembers.splice(index, 1)[0]);
    }

    spotlightSection.innerHTML = `
        ${randomSpotlights.map(member => `
            <div class="spotlight">
                <img src="${member.logo}" alt="${member.name}" class="spotlight-logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.membership}</p>
            </div>
        `).join('')}
    `;
});
