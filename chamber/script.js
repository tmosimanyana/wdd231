
// Fetch the member data and populate the directory
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

// Display members in the specified view
function displayMembers(members) {
    const directory = document.querySelector('.business-directory');
    directory.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        directory.appendChild(card);
    });
}

// Toggle view between grid and list
document.getElementById('toggle-view').addEventListener('click', () => {
    const directory = document.querySelector('.business-directory');
    directory.classList.toggle('grid-view');
    directory.classList.toggle('list-view');
});

// Display the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Fetch and display members on page load
fetchMembers();






