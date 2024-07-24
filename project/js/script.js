document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '../data/members.json'; // Path to the JSON file

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displaySpotlights(data);
        })
        .catch(error => {
            console.error('Error loading member spotlights:', error);
        });

    function displaySpotlights(members) {
        const spotlightContainer = document.getElementById('spotlight-container');

        // Filter out gold and silver members
        const filteredMembers = members.filter(member => 
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        // Randomly select 2 or 3 members from the filtered list
        const selectedMembers = [];
        for (let i = 0; i < 3 && filteredMembers.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
        }

        // Generate HTML for each selected member
        spotlightContainer.innerHTML = selectedMembers.map(member => `
            <div class="spotlight-card">
                <img src="${member.logoUrl}" alt="${member.companyName} Logo">
                <h3>${member.companyName}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <a href="${member.websiteUrl}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `).join('');
    }
});
