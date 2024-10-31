const companyList = document.getElementById('companyList');

async function fetchCompanySpotlights() {
    try {
        const response = await fetch('chamber/data/members.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

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
    } catch (error) {
        companyList.innerHTML = `<p class="error">Error fetching data. Please try again later.</p>`;
        console.error('Fetch error:', error);
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

fetchCompanySpotlights();
