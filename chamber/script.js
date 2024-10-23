document.addEventListener('DOMContentLoaded', () => {
    let membersData = []; // Will store the fetched members data

    // Fetch members data and display it
    async function loadMembers() {
        try {
            const response = await fetch('chamber/data/members.json'); // Adjusted file path
            membersData = await response.json(); // Convert the response to JSON
            displayMembers(membersData); // Display members in the default view (grid-view)
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Function to display members in the specified view (grid or list)
    function displayMembers(members, view = 'grid-view') {
        const membersSection = document.getElementById('members');
        membersSection.className = view; // Update class based on view

        // Clear previous content
        membersSection.innerHTML = '';

        // Loop through members and create cards for each member
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone || 'N/A'}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
            `;

            membersSection.appendChild(memberDiv); // Append the member card to the section
        });
    }

    // Function to get membership level as a string
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Event listeners for grid and list view buttons
    const gridButton = document.getElementById('gridView');
    const listButton = document.getElementById('listView');

    gridButton.addEventListener('click', (e) => {
        e.target.setAttribute('aria-pressed', 'true');
        listButton.setAttribute('aria-pressed', 'false');
        displayMembers(membersData, 'grid-view'); // Display members in grid view
    });

    listButton.addEventListener('click', (e) => {
        e.target.setAttribute('aria-pressed', 'true');
        gridButton.setAttribute('aria-pressed', 'false');
        displayMembers(membersData, 'list-view'); // Display members in list view
    });

    // Load members data on page load
    loadMembers();
});

// Update the year and last modified date in the footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
