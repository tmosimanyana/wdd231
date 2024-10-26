// Fetch members data from JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Updated path if necessary
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members, 'grid');
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display members in grid or list view
function displayMembers(members, view) {
    const container = document.getElementById('member-container');
    container.innerHTML = ''; // Clear existing entries

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = view === 'grid' ? 'member-card grid' : 'member-card list';

        // Create HTML structure for member details
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;
        container.appendChild(memberCard);
    });
}

// Toggle view functionality
document.getElementById('toggle-view').addEventListener('click', function() {
    const currentView = this.textContent.includes('List') ? 'grid' : 'list';
    const members = JSON.parse(localStorage.getItem('members')) || []; // Check localStorage for members
    displayMembers(members, currentView);
    this.textContent = currentView === 'grid' ? 'Switch to List View' : 'Switch to Grid View';
});

// Call fetchMembers to load members on page load
fetchMembers();

// Update the last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Update the current year
document.getElementById('year').textContent = new Date().getFullYear();
