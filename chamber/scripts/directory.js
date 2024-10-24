import { fetchMembers, displayMembers } from './modules/memberFunctions.js';

async function init() {
    const members = await fetchMembers('data/members.json');
    displayMembers(members, 'grid-view'); // Default view
}

document.addEventListener('DOMContentLoaded', init);

document.getElementById('grid-view-btn').addEventListener('click', () => {
    displayMembers(members, 'grid-view');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    displayMembers(members, 'list-view');
});
export async function fetchMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.members; // Adjust as per  JSON structure
}

export function displayMembers(members, view) {
    const container = document.getElementById('directory-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = view === 'grid-view' ? 'member-card grid' : 'member-card list';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.membershipLevel}</p>
        `;
        container.appendChild(memberCard);
    });
}
