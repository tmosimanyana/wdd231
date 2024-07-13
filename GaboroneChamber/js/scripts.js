document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members-container');
    const toggleViewButton = document.getElementById('toggleView');

    // Fetch and display member data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();

            members.forEach(member => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}">Visit Website</a>
                `;
                membersContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    // Toggle between grid and list view
    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('grid-view');
        membersContainer.classList.toggle('list-view');
    });

    // Display current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModifiedDate').textContent = document.lastModified;

    fetchMembers();
});
