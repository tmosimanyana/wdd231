// Fetch data from members.json
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid-view');
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to display members
function displayMembers(members, viewType) {
    const membersSection = document.getElementById('members');
    membersSection.innerHTML = ''; // Clear any previous content
    membersSection.classList = viewType; // Set view type

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : member.membershipLevel === 2 ? 'Silver' : 'Member'}</p>
        `;

        membersSection.appendChild(memberCard);
    });
}

// Toggle view between Grid and List
document.getElementById('gridView').addEventListener('click', () => {
    fetchMembers().then(() => displayMembers(members, 'grid-view'));
});

document.getElementById('listView').addEventListener('click', () => {
    fetchMembers().then(() => displayMembers(members, 'list-view'));
});

// Display the year and last modified date in the footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Call fetchMembers initially to load the data
fetchMembers();
