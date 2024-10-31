// script.js

const API_URL = 'https://example.com/members.json'; // Replace with your actual JSON data source
const membersContainer = document.getElementById('members-container');
const viewToggle = document.getElementById('view-toggle');

async function fetchMembers() {
    try {
        const response = await fetch(API_URL);
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
        membersContainer.innerHTML = `<p>Error loading members.</p>`;
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>Age: ${member.age}</p>
            <p>Email: ${member.email}</p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

viewToggle.addEventListener('click', () => {
    const isGridView = membersContainer.classList.contains('grid-view');
    membersContainer.classList.toggle('grid-view', !isGridView);
    membersContainer.classList.toggle('list-view', isGridView);
    viewToggle.textContent = isGridView ? 'Switch to Grid View' : 'Switch to List View';
});

// Display current year and last modified date
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Fetch members on page load
fetchMembers();
