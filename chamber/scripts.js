document.addEventListener('DOMContentLoaded', () => {
    const gridButton = document.getElementById('gridView');
    const listButton = document.getElementById('listView');
    const membersContainer = document.getElementById('members');

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('directory-item');
            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>${member.description}</p>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }

    function toggleView(view) {
        if (view === 'grid') {
            membersContainer.classList.add('directory-grid');
            membersContainer.classList.remove('directory-list');
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        } else {
            membersContainer.classList.add('directory-list');
            membersContainer.classList.remove('directory-grid');
            gridButton.classList.remove('active');
            listButton.classList.add('active');
        }
    }

    gridButton.addEventListener('click', () => toggleView('grid'));
    listButton.addEventListener('click', () => toggleView('list'));

    fetchMembers();
    toggleView('grid'); // Default view
    updateFooter();
});

function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified).toLocaleDateString();

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;
}
