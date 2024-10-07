// Function to fetch member data from JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Function to display members in the specified layout
function displayMembers(members) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.url}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

// Function to toggle between grid and list views
function toggleView() {
    const container = document.getElementById('membersContainer');
    const isGridView = container.classList.toggle('grid-view');
    container.classList.toggle('list-view', !isGridView);
}

// Display the current year and last modified date
function displayFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleDateString();
}

// Event listeners
document.getElementById('toggleView').addEventListener('click', toggleView);

// Initial fetch and setup
fetchMembers();
displayFooterInfo();
