document.addEventListener('DOMContentLoaded', async () => {
    const memberContainer = document.getElementById('member-container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    
    // Fetch and display member data
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        memberContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">Visit Website</a>
                <p>Membership Level: ${member.membershipLevel === 1 ? 'Member' : member.membershipLevel === 2 ? 'Silver' : 'Gold'}</p>
            </div>
        `).join('');
    } catch (error) {
        memberContainer.innerHTML = '<p>Error fetching member data.</p>';
    }

    // Toggle views
    gridViewBtn.addEventListener('click', () => {
        memberContainer.classList.add('grid-view');
        memberContainer.classList.remove('list-view');
    });

    listViewBtn.addEventListener('click', () => {
        memberContainer.classList.add('list-view');
        memberContainer.classList.remove('grid-view');
    });
});
