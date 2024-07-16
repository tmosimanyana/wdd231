document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid');
    }

    function displayMembers(members, view) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add(view === 'grid' ? 'member-card' : 'member-list-item');
            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }

    gridViewButton.addEventListener('click', () => {
        fetchMembers().then(members => displayMembers(members, 'grid'));
    });

    listViewButton.addEventListener('click', () => {
        fetchMembers().then(members => displayMembers(members, 'list'));
    });

    // Initial load
    fetchMembers();

    // Update footer year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
