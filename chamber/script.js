async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    const memberContainer = document.getElementById('memberContainer');
    memberContainer.innerHTML = '';  // Clear container

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.phone ? member.phone : 'N/A'}</p>
            <p>${member.address}</p>
            <p>${membershipLevelName(member.membershipLevel)}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        memberContainer.appendChild(memberCard);
    });
}

function membershipLevelName(level) {
    switch(level) {
        case 1: return 'Basic';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle between grid and list view
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('memberContainer').classList.remove('list-view');
    document.getElementById('memberContainer').classList.add('grid-view');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('memberContainer').classList.remove('grid-view');
    document.getElementById('memberContainer').classList.add('list-view');
});

// Footer updates (current year and last modification date)
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

// Fetch members on page load
fetchMembers();
