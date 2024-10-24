const fetchMembers = async () => {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
};

const displayMembers = (members) => {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo" loading="lazy" class="member-logo">
            <h2>${member.name}</h2>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;

        directoryContainer.appendChild(memberCard);
    });
};

document.getElementById('grid-view-btn').addEventListener('click', () => {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.classList.remove('list-view');
    directoryContainer.classList.add('grid-view');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.classList.remove('grid-view');
    directoryContainer.classList.add('list-view');
});

// Fetch and display members on page load
window.onload = fetchMembers;
