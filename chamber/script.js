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
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.url}" target="_blank">Website</a>
            <img src="${member.image}" alt="${member.name}" />
        `;
        container.appendChild(card);
    });

    if (view === 'list') {
        container.classList.remove('grid');
    } else {
        container.classList.add('grid');
    }
}

document.getElementById('toggle-view').addEventListener('click', () => {
    const currentView = document.getElementById('members-container').classList.contains('grid') ? 'grid' : 'list';
    displayMembers(membersData, currentView === 'grid' ? 'list' : 'grid');
});

let
