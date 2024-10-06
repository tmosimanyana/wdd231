async function fetchMemberData() {
    const url = 'data/members.json'; // Correct path to your JSON file

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const memberData = await response.json();
        displayMembers(memberData); // Pass the fetched data to the display function
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayMembers(memberData) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = ''; // Clear existing content

    memberData.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.url}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

// Call the function to fetch data when the script loads
fetchMemberData();
// Toggle between grid and list views
document.getElementById('toggleView').addEventListener('click', function() {
    const container = document.getElementById('membersContainer');
    container.classList.toggle('list-view'); // Toggle the class on click
});
// Dynamic footer information
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
