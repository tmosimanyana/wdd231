const companyList = document.getElementById('companyList');

// Function to fetch company spotlight data
async function fetchCompanySpotlights() {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const members = await response.json();
        const qualifiedMembers = members.filter(member => member.level === 'Gold' || member.level === 'Silver');
        const randomMembers = getRandomMembers(qualifiedMembers, 3); // Get 3 random members

        displayMembers(randomMembers);
    } catch (error) {
        console.error('Error fetching company spotlight data:', error);
        companyList.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}

// Function to display the members in the company spotlight section
function displayMembers(members) {
    companyList.innerHTML = ''; // Clear any existing content
    members.forEach(member => {
        companyList.innerHTML += `
            <div class="company-spotlight">
                <h3>${member.companyName}</h3>
                <img src="${member.logo}" alt="${member.companyName} Logo" class="responsive">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.level}</p>
            </div>
        `;
    });
}

// Function to get a specified number of random members from the array
function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Initialize fetching the company spotlight data
fetchCompanySpotlights();
