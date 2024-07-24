document.addEventListener('DOMContentLoaded', async () => {
    const spotlightContainer = document.getElementById('spotlight-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch and display members
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) throw new Error('Network response was not ok.');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            spotlightContainer.innerHTML = `<p>Error loading member spotlights: ${error.message}</p>`;
        }
    }

    // Display members
    function displayMembers(members) {
        spotlightContainer.innerHTML = members.map(member => `
            <div class="spotlight-card">
                <img src="images/${member.image}" alt="${member.name}" class="spotlight-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p>Membership Level: ${['Member', 'Silver', 'Gold'][member.membershipLevel - 1]}</p>
                <p>${member.description}</p>
            </div>
        `).join('');
    }

    // Toggle views
    function setView(view) {
        spotlightContainer.className = view;
    }

    gridViewButton.addEventListener('click', () => setView('grid-view'));
    listViewButton.addEventListener('click', () => setView('list-view'));

    // Set footer info
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Initial fetch
    fetchMembers();
});
