document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display member data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); // Ensure path to JSON is correct
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            const membersContainer = document.getElementById('members');

            // Clear the container before adding members (if toggled)
            membersContainer.innerHTML = '';

            members.forEach(member => {
                // Create member card elements
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                // Construct member card HTML structure
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p><strong>Membership Level:</strong> ${member.level}</p>
                `;
                
                // Append the card to the container
                membersContainer.appendChild(memberCard);
            });
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    fetchMembers(); // Call the function to load members

    // Toggle between grid and list views
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const membersContainer = document.getElementById('members');

    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.add('grid');
        membersContainer.classList.remove('list');
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.add('list');
        membersContainer.classList.remove('grid');
    });

    // Display current year and last modification date in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
