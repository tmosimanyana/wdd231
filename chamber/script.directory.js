// directory.js

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Adjust the path as necessary
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Failed to fetch members:', error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('directory-listings'); // Ensure this ID matches your HTML

    // Clear any existing content
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(memberCard);
    });
}

function toggleView(view) {
    const container = document.getElementById('directory-listings');

    if (view === 'grid') {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    } else {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    }
}

document.getElementById('grid-view').addEventListener('click', () => toggleView('grid'));
document.getElementById('list-view').addEventListener('click', () => toggleView('list'));

// Initialize the directory on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
});
