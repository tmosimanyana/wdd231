// Function to fetch and display member data
async function fetchMembers() {
    try {
        const response = await fetch('members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display members
function displayMembers(members) {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear the container before populating

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card'; // Add a class for styling
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        memberList.appendChild(memberCard);
    });
}

// Functions to handle view toggling
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('memberList').classList.add('grid');
    document.getElementById('memberList').classList.remove('list');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('memberList').classList.add('list');
    document.getElementById('memberList').classList.remove('grid');
});

// Automatically update year and last modified date in footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch members when the page loads
document.addEventListener('DOMContentLoaded', fetchMembers);
