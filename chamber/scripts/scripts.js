document.addEventListener('DOMContentLoaded', () => {
    // Update current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Fetch member data and display it
    fetchMembersData();

    // Toggle view between grid and list
    document.getElementById('toggleView').addEventListener('click', toggleView);
});

async function fetchMembersData() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('membersContainer');
    members.forEach(member => {
        const memberCard = `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.level}</p>
            </div>
        `;

        const memberListItem = `
            <div class="member-list-item">
                <img src="images/${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.level}</p>
            </div>
        `;

        container.innerHTML += memberCard + memberListItem;
    });
}

function toggleView() {
    const container = document.getElementById('membersContainer');
    container.classList.toggle('list-view');
    container.classList.toggle('grid-view');
}

