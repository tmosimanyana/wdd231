document.addEventListener('DOMContentLoaded', async () => {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleView');
    const lastModified = document.getElementById('lastModified');
    const currentYear = document.getElementById('currentYear');

    // Fetch member data from JSON file
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    // Display members on the page
    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Clear existing content
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.icon}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // Toggle between grid and list views
    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('grid-view');
        membersContainer.classList.toggle('list-view');
    });

    // Update footer with current year and last modified date
    const date = new Date();
    currentYear.textContent = date.getFullYear();
    lastModified.textContent = document.lastModified;

    // Fetch members on page load
    fetchMembers();
});
