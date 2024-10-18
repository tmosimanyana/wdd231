// Fetch and display member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Relative path to members.json
        const members = await response.json();
        const membersContainer = document.getElementById('members');

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

fetchMembers();

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
