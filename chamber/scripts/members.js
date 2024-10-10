// Fetch members.json data and display
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

// Display member data
function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" width="100" height="100">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: <a href="tel:${member.phone}">${member.phone}</a></p>
            <p>Website: <a href="${member.website}">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        container.appendChild(memberCard);
    });
}

// Toggle between grid and list views
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('grid-view');
    document.getElementById('members-container').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('list-view');
    document.getElementById('members-container').classList.remove('grid-view');
});

// Dynamically update copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize
fetchMembers();
