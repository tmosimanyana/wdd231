document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members');
    const gridViewBtn = document.getElementById('gridView');
    const listViewBtn = document.getElementById('listView');

    // Fetch members data
    async function getMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    }

    function displayMembers(members) {
        membersContainer.innerHTML = members.map(member => `
            <div>
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    }

    // Toggle view
    gridViewBtn.addEventListener('click', () => {
        membersContainer.className = 'grid';
    });

    listViewBtn.addEventListener('click', () => {
        membersContainer.className = 'list';
    });

    // Display current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Display last modified date
    document.getElementById('lastModified').textContent = document.lastModified;

    // Fetch and display members data
    getMembers();
});
