document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('member-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    const fetchMembers = async () => {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            return members;
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    };

    const displayMembers = async () => {
        const members = await fetchMembers();
        if (members) {
            memberContainer.innerHTML = members.map(member => `
                <div class="${currentView}-item member-card">
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}">Visit Website</a>
                </div>
            `).join('');
        }
    };

    let currentView = 'grid';
    const toggleView = (view) => {
        currentView = view;
        memberContainer.className = `${view}-view`;
        gridViewButton.classList.toggle('active', view === 'grid');
        listViewButton.classList.toggle('active', view === 'list');
        displayMembers();
    };

    gridViewButton.addEventListener('click', () => toggleView('grid'));
    listViewButton.addEventListener('click', () => toggleView('list'));

    toggleView('grid');

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;
});
