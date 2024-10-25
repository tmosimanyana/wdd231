const companyList = document.getElementById('companyList');

async function fetchCompanySpotlights() {
    try {
        const response = await fetch('data/members.json'); // Adjusted path for GitHub Pages
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const members = await response.json();
        const qualifiedMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');
        const randomMembers = getRandomMembers(qualifiedMembers, 3); // Get 2-3 random members

        // Clear previous content before populating new data
        companyList.innerHTML = '';

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
        console.error('Error fetching company spotlight data:', error);
        companyList.innerHTML = '<p>Error fetching data. Please try again later.</p>'; // Display user-friendly error message
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Call the fetch function to populate the company spotlight
fetchCompanySpotlights();
