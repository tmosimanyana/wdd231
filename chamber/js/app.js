// app.js

// Function to fetch member data from JSON
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display members in grid or list view
function displayMembers(members) {
    const membersSection = document.getElementById('members');
    membersSection.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        membersSection.appendChild(memberCard);
    });
}

// Event listeners for view toggle buttons
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('members').classList.remove('list-view');
    document.getElementById('members').classList.add('grid-view');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('members').classList.remove('grid-view');
    document.getElementById('members').classList.add('list-view');
});

// Update footer information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch and display members on page load
fetchMembers();
