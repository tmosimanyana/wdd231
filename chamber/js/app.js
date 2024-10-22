document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('data/members.json'); // Adjust the path if necessary
        if (!response.ok) throw new Error('Network response was not ok');
        
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Failed to fetch members:', error);
    }
});

function displayMembers(members) {
    const membersSection = document.getElementById('members');

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-item';

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" class="member-image">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        
        membersSection.appendChild(memberDiv);
    });
}
