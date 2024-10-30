let isGridView = true;

async function fetchMembers() {
    const response = await fetch('members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const memberContainer = document.getElementById('memberContainer');
    memberContainer.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.membershipLevel}</p>
        `;
        memberContainer.appendChild(memberCard);
    });
}

function toggleView() {
    const memberContainer = document.getElementById('memberContainer');
    isGridView = !isGridView;
    memberContainer.classList.toggle('grid-view', isGridView);
    memberContainer.classList.toggle('list-view', !isGridView);
}

// Fetch members when the page loads
window.onload = fetchMembers;
