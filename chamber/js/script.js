document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleView');
    let isGridView = true; // Start with grid view as the default.

    // Fetch and Display Member Data from members.json
    async function loadMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Failed to fetch members data.');
            }
            const members = await response.json();

            // Clear the container before inserting new content
            membersContainer.innerHTML = '';

            // Loop through the members and create their respective HTML elements
            members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                // Add content to the member card
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <a href="${member.url}" target="_blank">Visit Website</a>
                    <p>Membership Level: ${getMembershipLevel(member.membership_level)}</p>
                `;

                // Append the card to the container
                membersContainer.appendChild(memberCard);
            });
        } catch (error) {
            console.error('Error loading members:', error);
        }
    }

    // Helper function to convert membership level numbers to text
    function getMembershipLevel(level) {
        switch (level) {
            case 1:
                return 'Member';
            case 2:
                return 'Silver';
            case 3:
                return 'Gold';
            default:
                return 'Unknown';
        }
    }

    // Toggle between grid and list views
    toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView; // Toggle the view state
        if (isGridView) {
            membersContainer.classList.add('grid-view');
            membersContainer.classList.remove('list-view');
        } else {
            membersContainer.classList.add('list-view');
            membersContainer.classList.remove('grid-view');
        }
    });

    // Display the current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    // Initialize the page by loading members
    loadMembers();
});
