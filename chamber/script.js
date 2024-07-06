document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.querySelector('.member-list');
    const toggleViewBtn = document.getElementById('toggle-view');
    
    // Fetch member data
    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        return members;
    }

    // Render members
    async function renderMembers() {
        const members = await fetchMembers();
        memberList.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}">${member.website}</a></p>
                <img src="images/${member.image}" alt="${member.name}">
            `;
            memberList.appendChild(memberCard);
        });
    }

    // Toggle view
    toggleViewBtn.addEventListener('click', () => {
        memberList.classList.toggle('list-view');
    });

    // Display initial members
    renderMembers();

    // Update last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Update copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});






