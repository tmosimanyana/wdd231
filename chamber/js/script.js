// Function to fetch member data from members.json
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        return members;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display members in the specified view
function displayMembers(members, view) {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear existing members

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'card';
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" class="member-image">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${getMembershipLevel(member.level)}</p>
        `;
        container.appendChild(memberCard);
    });

    // Set class for grid or list view
    container.className = view; 
}

// Function to get the membership level as text
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle view between grid and list
document.getElementById('toggle-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    const currentView = container.classList.contains('grid') ? 'grid' : 'list';
    displayMembers(membersData, currentView === 'grid' ? 'list' : 'grid'); // Toggle view
});

// On window load, fetch and display members
window.onload = async function() {
    const membersData = await fetchMembers();
    displayMembers(membersData, 'grid'); // Default to grid view

    // Set footer year and last modified date
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    document.getElementById('footer-modified').textContent = 'Last modified: ' + document.lastModified;
};
