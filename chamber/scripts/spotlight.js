const companyList = document.getElementById('companyList');

async function fetchCompanySpotlights() {
    const response = await fetch('chamber/data/members.json');
    const members = await response.json();
    const qualifiedMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');
    const randomMembers = getRandomMembers(qualifiedMembers, 3); // Get 2-3 random members

    randomMembers.forEach(member => {
        companyList.innerHTML += `
            <div class="company-spotlight">
                <h3>${member.companyName}</h3>
                <img src="${member.logo}" alt="${member.companyName} Logo">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.level}</p>
            </div>
        `;
    });
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

fetchCompanySpotlights();
