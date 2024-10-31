// main.js

const membersContainer = document.getElementById('membersContainer');
const copyrightYear = document.getElementById('copyrightYear');
const lastModified = document.getElementById('lastModified');
const toggleViewButton = document.getElementById('toggleView');
let isGridView = true;

// Function to fetch member data from JSON file
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

// Function to display members
function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.membershipLevel}</p>
        `;
        membersContainer.appendChild(memberCard);
    });

    if (!isGridView) {
        membersContainer.style.display = 'block'; // Line item list
    }
}

// Toggle view between grid and list
toggleViewButton.addEventListener('click', () => {
    isGridView = !isGridView;
    if (isGridView) {
        membersContainer.classList.remove('list-view');
    } else {
        membersContainer.classList.add('list-view');
    }
    fetchMembers(); // Re-fetch members to apply new view
});

// Set copyright year and last modified date
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
lastModified.textContent = document.lastModified;

fetchMembers(); // Initial fetch on page load
