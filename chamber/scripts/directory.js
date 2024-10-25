// Fetch the member data from the JSON file
async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json'); // Updated path
        if (!response.ok) throw new Error('Network response was not ok');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display members
function displayMembers(members) {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear any existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        memberList.appendChild(memberCard);
    });
}

// Toggle between grid and list view
function toggleView(view) {
    const memberList = document.getElementById('memberList');
    memberList.className = view; // Set the class to 'grid' or 'list'
}

// Event listeners for view toggle buttons
document.getElementById('gridView').addEventListener('click', () => toggleView('grid'));
document.getElementById('listView').addEventListener('click', () => toggleView('list'));

// Initialize the directory
fetchMemberData();
