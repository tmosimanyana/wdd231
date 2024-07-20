document.addEventListener("DOMContentLoaded", async () => {
    const membersSection = document.getElementById('members');
    const gridButton = document.getElementById('gridView');
    const listButton = document.getElementById('listView');

    // Fetch member data
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
        membersSection.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'directory-item';
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${getMembershipLevel(member.level)}</p>
            `;
            membersSection.appendChild(memberCard);
        });
    }

    // Convert membership level number to text
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Toggle view
    gridButton.addEventListener('click', () => {
        membersSection.classList.add('directory-grid');
        membersSection.classList.remove('directory-list');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });

    listButton.addEventListener('click', () => {
        membersSection.classList.add('directory-list');
        membersSection.classList.remove('directory-grid');
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });

    // Update footer information
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('lastModified').textContent = lastModified;

    // Initial fetch of member data
    fetchMembers();
});
