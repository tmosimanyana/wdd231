// JavaScript to handle dynamic content and interactions

// Function to fetch and display member data
async function loadMemberData() {
    const apiUrl = 'data/members.json'; // Update path based on your folder structure
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        const spotlightContainer = document.getElementById('spotlight-container');

        spotlightContainer.innerHTML = members.map(member => `
            <div class="spotlight-card" data-level="${member.membership_level}">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading member spotlights:', error);
        document.getElementById('spotlight-container').innerHTML = '<p>Error loading member spotlights.</p>';
    }
}

// Toggle between grid and list view
function toggleView(view) {
    const container = document.getElementById('spotlight-container');
    if (view === 'grid') {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    } else if (view === 'list') {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    }
}

// Event listeners for view toggles
document.querySelector('.grid-toggle').addEventListener('click', () => toggleView('grid'));
document.querySelector('.list-toggle').addEventListener('click', () => toggleView('list'));

// Set the current year and last modified date in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Load member data on page load
document.addEventListener('DOMContentLoaded', loadMemberData);

