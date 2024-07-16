// chamber-project/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Update year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Fetch member data and display it
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data));

    // Toggle view buttons
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const memberList = document.getElementById('member-list');

    gridViewButton.addEventListener('click', () => {
        memberList.classList.add('grid-view');
        memberList.classList.remove('list-view');
        gridViewButton.classList.add('active');
        listViewButton.classList.remove('active');
    });

    listViewButton.addEventListener('click', () => {
        memberList.classList.add('list-view');
        memberList.classList.remove('grid-view');
        listViewButton.classList.add('active');
        gridViewButton.classList.remove('active');
    });
});

async function displayMembers(members) {
    const memberList = document.getElementById('member-list');

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        const memberListItem = document.createElement('div');
        memberListItem.className = 'member-list-item';
        memberListItem.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        memberList.appendChild(memberCard);
        memberList.appendChild(memberListItem);
    });
}
