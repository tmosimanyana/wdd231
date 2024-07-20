document.addEventListener('DOMContentLoaded', async () => {
    const membersContainer = document.getElementById('members');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    // Load members data
    async function loadMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error loading members data:', error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Clear previous content
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>${member.description}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    function switchToGridView() {
        membersContainer.classList.add('directory-grid');
        membersContainer.classList.remove('directory-list');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    }

    function switchToListView() {
        membersContainer.classList.add('directory-list');
        membersContainer.classList.remove('directory-grid');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    }

    gridViewButton.addEventListener('click', switchToGridView);
    listViewButton.addEventListener('click', switchToListView);

    // Initialize
    await loadMembers();
    switchToGridView(); // Default view
});

// Display current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
