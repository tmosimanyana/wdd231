document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleView');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('year').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error fetching members data:', error));

    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('list-view');
        membersContainer.classList.toggle('grid-view');
    });

    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <img src="${member.image}" alt="${member.name}">
                <p>Membership Level: ${member.membership}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    }
});
