document.addEventListener("DOMContentLoaded", async () => {
    // Define URLs
    const jsonURL = 'data/members.json';

    // Fetch member data
    async function fetchMemberData() {
        try {
            const response = await fetch(jsonURL);
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Populate member data into the directory
    function displayMembers(members, viewType) {
        const membersSection = document.getElementById('members');
        membersSection.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('directory-item');

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            `;

            if (viewType === 'grid') {
                memberElement.classList.add('directory-item-grid');
            } else {
                memberElement.classList.add('directory-item-list');
            }

            membersSection.appendChild(memberElement);
        });
    }

    // Toggle between grid and list views
    function setupViewToggle(members) {
        const gridViewButton = document.getElementById('gridView');
        const listViewButton = document.getElementById('listView');

        gridViewButton.addEventListener('click', () => {
            gridViewButton.classList.add('active');
            listViewButton.classList.remove('active');
            displayMembers(members, 'grid');
        });

        listViewButton.addEventListener('click', () => {
            listViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
            displayMembers(members, 'list');
        });

        // Set initial view
        gridViewButton.click();
    }

    // Get membership level description
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Update footer with current year and last modification date
    function updateFooter() {
        const currentYear = new Date().getFullYear();
        const lastModified = new Date(document.lastModified).toLocaleDateString();
        document.getElementById('currentYear').textContent = currentYear;
        document.getElementById('lastModified').textContent = lastModified;
    }

    // Initialize
    const members = await fetchMemberData();
    if (members) {
        setupViewToggle(members);
    }
    updateFooter();
});
