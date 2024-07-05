document.addEventListener('DOMContentLoaded', () => {
    const membersList = document.getElementById('members-list');
    const toggleViewButton = document.getElementById('toggle-view');
    
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displayMembers(members) {
        membersList.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${getMembershipLevel(member.membership_level)}</p>
            </div>
        `).join('');
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    toggleViewButton.addEventListener('click', () => {
        if (membersList.classList.contains('grid-view')) {
            membersList.classList.remove('grid-view');
            membersList.classList.add('list-view');
            toggleViewButton.textContent = 'Switch to Grid View';
        } else {
            membersList.classList.remove('list-view');
            membersList.classList.add('grid-view');
            toggleViewButton.textContent = 'Switch to List View';
        }
    });

    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const modDateSpan = document.getElementById('mod-date');
    modDateSpan.textContent = document.lastModified;

    fetchMembers();
});




