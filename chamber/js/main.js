document.addEventListener("DOMContentLoaded", async () => {
    const membersList = document.getElementById('members-list');
    const viewToggleButton = document.getElementById('view-toggle');

    // Fetch member data from JSON file
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Function to display members in specified layout
    const displayMembers = (layout) => {
        membersList.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersList.appendChild(memberCard);
        });
        if (layout === 'list') {
            membersList.style.display = 'block';
            document.querySelectorAll('.member-card').forEach(card => {
                card.style.display = 'block';
                card.style.marginBottom = '20px';
            });
        } else {
            membersList.style.display = 'grid';
            document.querySelectorAll('.member-card').forEach(card => {
                card.style.display = 'block';
            });
        }
    };

    // Initial display in grid layout
    displayMembers('grid');

    // Toggle view between grid and list
    viewToggleButton.addEventListener('click', () => {
        const currentLayout = membersList.style.display === 'grid' ? 'grid' : 'list';
        displayMembers(currentLayout === 'grid' ? 'list' : 'grid');
    });

    // Set current year and last modified date in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
