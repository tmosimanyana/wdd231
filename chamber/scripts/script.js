document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.getElementById('member-list');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch and display member data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error('Error fetching member data:', error));

    // Display members in the DOM
    function displayMembers(members) {
        memberList.innerHTML = members.map(member => createMemberCard(member)).join('');
    }

    // Create member card HTML
    function createMemberCard(member) {
        return `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <div class="member-card-content">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>
            </div>
        `;
    }

    // Toggle between grid view and list view
    gridViewButton.addEventListener('click', () => {
        memberList.classList.add('grid-view');
        memberList.classList.remove('list-view');
    });

    listViewButton.addEventListener('click', () => {
        memberList.classList.add('list-view');
        memberList.classList.remove('grid-view');
    });

    // Display the current year and last modification date in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});

