// Fetch member data and display it
async function fetchAndDisplayMembers() {
    try {
        const response = await fetch('data/members.json'); // Update path as necessary
        if (!response.ok) throw new Error('Failed to fetch members data');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display members in grid or list view
function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" class="member-logo" />
            <h3 class="member-name">${member.name}</h3>
            <p class="member-phone">Phone: ${member.phone}</p>
            <p class="member-address">Address: ${member.address}</p>
            <a href="${member.website}" target="_blank" class="member-website">Website</a>
            <p class="member-level">Membership Level: ${member.membershipLevel}</p>
        `;
        container.appendChild(memberCard);
    });
}

// Toggle between grid and list view
function toggleView() {
    const container = document.getElementById('members-container');
    const toggleButton = document.getElementById('view-toggle');
    container.classList.toggle('list-view'); // Toggle CSS class for styling
    if (container.classList.contains('list-view')) {
        toggleButton.textContent = 'Switch to Grid View';
    } else {
        toggleButton.textContent = 'Switch to List View';
    }
}

// Event listener for the view toggle button
document.getElementById('view-toggle').addEventListener('click', toggleView);

// Call the fetch function on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayMembers);
