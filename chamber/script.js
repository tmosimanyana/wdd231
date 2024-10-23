// Select DOM elements
const membersContainer = document.getElementById('members');
const gridViewButton = document.getElementById('gridView');
const listViewButton = document.getElementById('listView');

// Fetch member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Display member data
function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;

        membersContainer.appendChild(memberCard);
    });
}

// Toggle between grid and list views
gridViewButton.addEventListener('click', () => {
    membersContainer.className = 'grid-view';
});

listViewButton.addEventListener('click', () => {
    membersContainer.className = 'list-view';
});

// Initialize the page
fetchMembers();
