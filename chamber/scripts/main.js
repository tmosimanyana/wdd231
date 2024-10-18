async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.getElementById('members');
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
            </div>
        `;
        container.innerHTML += memberCard;
    });
}

document.addEventListener("DOMContentLoaded", fetchMembers);

// Toggle between grid and list views
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('members').classList.add('grid');
    document.getElementById('members').classList.remove('list');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('members').classList.add('list');
    document.getElementById('members').classList.remove('grid');
});

// Update the footer year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
