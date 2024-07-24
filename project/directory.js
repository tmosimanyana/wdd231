// directory.js

document.addEventListener('DOMContentLoaded', async () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Fetch Member Data
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const memberList = document.getElementById('member-list');

        const displayMembers = (viewType) => {
            if (viewType === 'grid') {
                memberList.classList.add('grid-view');
                memberList.classList.remove('list-view');
            } else {
                memberList.classList.add('list-view');
                memberList.classList.remove('grid-view');
            }

            memberList.innerHTML = members.map(member => `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `).join('');
        };

        // Default view
        displayMembers('grid');

        // View Toggle
        document.getElementById('grid-view').addEventListener('click', () => {
            document.getElementById('grid-view').classList.add('active');
            document.getElementById('list-view').classList.remove('active');
            displayMembers('grid');
        });

        document.getElementById('list-view').addEventListener('click', () => {
            document.getElementById('list-view').classList.add('active');
            document.getElementById('grid-view').classList.remove('active');
            displayMembers('list');
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
});
