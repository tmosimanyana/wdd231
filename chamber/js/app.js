// app.js

// Fetching member data from members.json
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Display members in grid or list view
function displayMembers(members) {
    const membersSection = document.getElementById('members');
    membersSection.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        membersSection.appendChild(memberCard);
    });
}

// Toggle between grid and list view
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('members').classList.add('grid-view');
    document.getElementById('members').classList.remove('list-view');
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('members').classList.add('list-view');
    document.getElementById('members').classList.remove('grid-view');
});

// Display current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch members on page load
fetchMembers();
