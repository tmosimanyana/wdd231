// Fetching and displaying member data
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const membersData = await response.json();
        displayMembers(membersData); // Display members dynamically
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Display members with grid or list view classes
function displayMembers(membersData) {
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = ""; // Clear any existing content

    membersData.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = `members-item grid`; // Default to grid view

        memberItem.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <a href="#" aria-label="Visit ${member.name} website">Visit Website</a>
        `;
        membersContainer.appendChild(memberItem);
    });
}

// Toggle between grid and list views
function toggleView(isGridView) {
    const membersContainer = document.getElementById("members-container");
    const memberItems = membersContainer.querySelectorAll('.members-item');

    if (isGridView) {
        memberItems.forEach(item => item.className = 'members-item grid');
        document.getElementById("view-toggle").textContent = "Switch to List View";
    } else {
        memberItems.forEach(item => item.className = 'members-item list');
        document.getElementById("view-toggle").textContent = "Switch to Grid View";
    }
}

// Set current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Fetch members on page load
fetchMembers();

// Toggle view button functionality
document.getElementById("view-toggle").addEventListener("click", () => {
    const viewToggleButton = document.getElementById("view-toggle");
    const isGridView = viewToggleButton.textContent.includes("Grid");
    toggleView(isGridView);
});
