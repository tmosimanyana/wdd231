// Fetch the members data from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        return members;
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('members-container').innerHTML = '<p>Unable to load members. Please try again later.</p>';
    }
}

// Display members on the page, either as grid or list
function displayMembers(members, view = 'grid') {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.url}" target="_blank" aria-label="Visit ${member.name} website">Visit Website</a>
            <br/>
            <img src="images/${member.image}" alt="Logo of ${member.name}" style="width: 100px; height: auto;" onerror="this.src='images/default.png'" />
        `;
        container.appendChild(card);
    });

    // Toggle the container's class based on the view (grid or list)
    if (view === 'list') {
        container.classList.remove('grid');
        container.classList.add('list');
    } else {
        container.classList.remove('list');
        container.classList.add('grid');
    }
}

// Add event listener to toggle the view between grid and list
document.getElementById('toggle-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    const currentView = container.classList.contains('grid') ? 'grid' : 'list';
    displayMembers(membersData, currentView === 'grid' ? 'list' : 'grid');
});

// Variable to store the fetched members data
let membersData = [];

// Execute functions on window load
window.onload = async function() {
    // Fetch members data and display them
    membersData = await fetchMembers();
    if (membersData) {
        displayMembers(membersData); // Default view is grid
    }

    // Display the current year dynamically in the footer
    const yearSpan = document.getElementById('footer-year');
    yearSpan.innerHTML = new Date().getFullYear();

    // Display the last modification date dynamically in the footer
    const modifiedSpan = document.getElementById('footer-modified');
    modifiedSpan.innerHTML = document.lastModified;
};
