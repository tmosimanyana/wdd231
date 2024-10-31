// Function to fetch members data
async function fetchMembers() {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const membersData = await response.json();
        displayMembers(membersData); // Display all members
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display members in either grid or list view
function displayMembers(membersData) {
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = ""; // Clear existing content

    membersData.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = `member-card grid`; // Default to grid class
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo" />
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <a href="#" class="website-link">Visit Website</a>
        `;
        membersContainer.appendChild(memberCard);
    });
}

// Function to toggle between grid and list views
function toggleView(isGridView) {
    const membersContainer = document.getElementById("members-container");
    const memberCards = membersContainer.querySelectorAll('.member-card');

    if (isGridView) {
        memberCards.forEach(card => {
            card.className = 'member-card grid'; // Apply grid class
        });
        document.getElementById("view-toggle").textContent = "Switch to List View";
    } else {
        memberCards.forEach(card => {
            card.className = 'member-card list'; // Apply list class
        });
        document.getElementById("view-toggle").textContent = "Switch to Grid View";
    }
}

// Call the function on page load
fetchMembers();

// Handle view toggle button click
document.getElementById("view-toggle").addEventListener("click", () => {
    const viewToggleButton = document.getElementById("view-toggle");
    const isGridView = viewToggleButton.textContent.includes("Grid");
    toggleView(isGridView);
});
