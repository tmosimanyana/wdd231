// Fetch and display member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Adjust the path if necessary
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        const membersContainer = document.getElementById('members');

        // Clear previous content
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.level}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
        const membersContainer = document.getElementById('members');
        membersContainer.innerHTML = '<p>Failed to load member data. Please try again later.</p>';
    }
}

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

// Initialize member data fetch on page load
fetchMembers();
