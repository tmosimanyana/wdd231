async function fetchMembers() {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const membersData = await response.json();
        displayMembers(membersData); // Display all members dynamically
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display members in grid or list view
function displayMembers(membersData) {
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = ""; // Clear any existing content

    membersData.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = `members-item grid`; // Default to grid class
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

// Function to toggle between grid and list view
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

// Call the function on page load
fetchMembers();

// Toggle view button functionality
document.getElementById("view-toggle").addEventListener("click", () => {
    const viewToggleButton = document.getElementById("view-toggle");
    const isGridView = viewToggleButton.textContent.includes("Grid");
    toggleView(isGridView);
});
