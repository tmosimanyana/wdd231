// Fetch member data and display in the directory
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid'); // Default to grid view on load
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display members either in grid or list view
function displayMembers(members, viewType) {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        // Member card content
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo" class="member-logo">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;

        // Apply class based on view type
        if (viewType === 'list') {
            memberCard.classList.add('list-item');
        } else {
            memberCard.classList.add('grid-item');
        }

        directoryContainer.appendChild(memberCard);
    });
}

// Event listeners for toggling between grid and list views
document.getElementById('grid-view-btn').addEventListener('click', () => {
    toggleView('grid');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    toggleView('list');
});

// Function to toggle the view and set active button
function toggleView(viewType) {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.className = viewType === 'list' ? 'list-view' : 'grid-view';
    fetchMembers(viewType);

    // Toggle active button
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(viewType + '-view-btn').classList.add('active');
}

// Fetch members on page load
fetchMembers();
