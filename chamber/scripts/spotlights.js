async function loadSpotlights() {
    try {
        const response = await fetch('members.json');
        const members = await response.json();
        const spotlightContainer = document.getElementById('businessSpotlightContent');
        spotlightContainer.innerHTML = '';

        // Filter members with Gold or Silver membership
        const qualifiedMembers = members.filter(member => 
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        // Randomly select 2 or 3 members
        const randomMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        randomMembers.forEach(member => {
            const businessCard = document.createElement('div');
            businessCard.className = 'business-card';
            businessCard.innerHTML = `
                <h3>${member.companyName}</h3>
                <p>${member.tagLine}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;
            spotlightContainer.appendChild(businessCard);
        });
    } catch (error) {
        console.error('Error loading member spotlights:', error);
    }
}

// Call the function to load business spotlights on page load
loadSpotlights();
