// main.js
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    updateLastModified();
    updateCurrentYear();
});

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const membersContainer = document.querySelector('.course-list');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
        `;

        membersContainer.appendChild(memberCard);
    });
}

function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toDateString()}`;
}

function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

