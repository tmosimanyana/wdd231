function displayMembers(members) {
    const membersContainer = document.getElementById('membersContainer');
    membersContainer.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.url}" target="_blank">Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.info ? member.info : ''}</p>
        `;
        membersContainer.appendChild(card);
    });
}
// Function to display the current year and last modified date
function displayFooterInfo() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const lastModified = new Date(document.lastModified).toLocaleDateString(); // Get the last modified date

    document.getElementById('currentYear').textContent = currentYear; // Set current year in footer
    document.getElementById('lastModified').textContent = lastModified; // Set last modified date in footer
}

// Call the function when the page loads
window.onload = displayFooterInfo;
