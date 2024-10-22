document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayMembers(data.members);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayMembers(members) {
    const membersSection = document.getElementById('members');
    membersSection.innerHTML = ''; // Clear any previous content
    members.forEach(member => {
        const memberCard = `
            <div class="member-item">
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `;
        membersSection.innerHTML += memberCard;
    });
}
