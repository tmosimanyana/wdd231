document.addEventListener('DOMContentLoaded', () => {
    // URL for the JSON data
    const url = 'path/to/your/members-data.json';  // Update with the correct path to your JSON data

    // Function to fetch and display company spotlights
    async function displaySpotlights() {
        try {
            // Fetch the JSON data
            const response = await fetch(url);
            const members = await response.json();

            // Filter for Silver and Gold members
            const qualifiedMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);

            // Randomly select 2 or 3 members
            const selectedMembers = [];
            while (selectedMembers.length < 3 && qualifiedMembers.length > 0) {
                const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
                selectedMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
            }

            // Populate the spotlights section
            const spotlightContainer = document.getElementById('spotlight-container');
            spotlightContainer.innerHTML = ''; // Clear existing content

            selectedMembers.forEach(member => {
                // Create the spotlight card
                const card = document.createElement('div');
                card.className = 'spotlight-card';

                // Add member details to the card
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} logo" class="spotlight-logo">
                    <h3>${member.name}</h3>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.description}</p>
                `;

                // Append the card to the container
                spotlightContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching or displaying member data:', error);
        }
    }

    // Call the function to display spotlights
    displaySpotlights();
});

