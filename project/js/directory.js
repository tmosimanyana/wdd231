document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.getElementById('member-list');
    const toggleViewButton = document.getElementById('toggle-view');
    let isGridView = true;

    async function fetchMemberData() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    function displayMembers(members) {
        memberList.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');
            if (isGridView) {
                memberElement.classList.add('card');
            } else {
                memberElement.classList.add('list-item');
            }
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                <p><strong>Additional Info:</strong> ${member.additionalInfo}</p>
            `;
            memberList.appendChild(memberElement);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    function toggleView() {
        isGridView = !isGridView;
        toggleViewButton.textContent = isGridView ? 'Switch to List View' : 'Switch to Grid View';
        displayMembers(JSON.parse(localStorage.getItem('members')));
    }

    toggleViewButton.addEventListener('click', toggleView);

    fetchMemberData().then(data => {
        localStorage.setItem('members', JSON.stringify(data));
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('last-modified').textContent = lastModifiedDate;
});
