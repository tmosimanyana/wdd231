// Fetch member data from the JSON file and display it
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const memberContainer = document.getElementById('members');

    memberContainer.innerHTML = members.map(member => `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        </div>
    `).join('');
}

// Toggle between grid and list view
function toggleView(viewType) {
    const memberContainer = document.getElementById('members');
    if (viewType === 'grid') {
        memberContainer.classList.remove('list-view');
        memberContainer.classList.add('grid-view');
    } else {
        memberContainer.classList.remove('grid-view');
        memberContainer.classList.add('list-view');
    }
}

// Set up event listeners for view toggle buttons
document.getElementById('gridView').addEventListener('click', () => toggleView('grid'));
document.getElementById('listView').addEventListener('click', () => toggleView('list'));

// Set dynamic footer information
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Initialize the page
fetchMembers();
