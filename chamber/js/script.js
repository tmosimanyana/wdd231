// Fetch members data from JSON and display them
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
}

function displayMembers(members, view = 'grid') {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.url}" target="_blank" class="member-link">Visit Website</a>
            </div>
        `;
        container.appendChild(card);
    });

    // Toggle view based on the selected layout (grid or list)
    container.classList.toggle('grid', view === 'grid');
    container.classList.toggle('list', view === 'list');
}

// Toggle view when button is clicked
document.getElementById('toggle-view').addEventListener('click', () => {
    const currentView = document.getElementById('members-container').classList.contains('grid') ? 'grid' : 'list';
    displayMembers(membersData, currentView === 'grid' ? 'list' : 'grid');
});

// Dynamically set the current year and last modified date in footer
window.onload = async function() {
    membersData = await fetchMembers();
    displayMembers(membersData);

    const yearSpan = document.getElementById('footer-year');
    yearSpan.innerHTML = new Date().getFullYear();

    const modifiedSpan = document.getElementById('footer-modified');
    modifiedSpan.innerHTML = document.lastModified;
};
