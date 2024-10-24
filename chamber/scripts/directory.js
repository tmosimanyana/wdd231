document.addEventListener("DOMContentLoaded", async () => {
    const directoryContainer = document.getElementById('directory-container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    // Function to fetch member data from JSON
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Function to display members
    function displayMembers(members) {
        directoryContainer.innerHTML = ''; // Clear container
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <div class="member-card-content">
                    <img src="${member.image}" alt="${member.name}" class="member-logo">
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
            directoryContainer.appendChild(memberCard);
        });
    }

    // Convert membership level number to text
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Bronze';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Non-Profit';
        }
    }

    // Toggle between grid and list views
    gridViewBtn.addEventListener('click', () => {
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });

    // Fetch and display the members
    fetchMembers();
});
