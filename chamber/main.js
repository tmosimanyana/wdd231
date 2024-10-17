// Array of member companies
const members = [
    {
        "name": "BAMB Headquarters",
        "address": "Plot 130, Nkwe Square, G.I.F.P, Gaborone",
        "phone": "+267 395 1341",
        "website": "https://bamb.co.bw/",
        "image": "images/bamb.webp",
        "membershipLevel": 3
    },
    {
        "name": "AgriFeed GICP",
        "address": "Plot 59 Unit 1B, GICP, Gaborone",
        "phone": "+267 390 1851",
        "website": "http://agrifeed.co.bw",
        "image": "images/agrifeed.webp",
        "membershipLevel": 2
    },
    {
        "name": "Greenhouse Technologies",
        "address": "Plot 20689 Sekotlo Rd, Gaborone",
        "phone": "+267 75 480 600",
        "website": "http://ghtech.co.za",
        "image": "images/greenhouse.webp",
        "membershipLevel": 2
    },
    {
        "name": "AFGRI Equipment",
        "address": "Plot 43143 Maphapheng Rd, Gaborone",
        "phone": "+267 311 0876",
        "website": "http://afgriequipment.co.za",
        "image": "images/afgri.webp",
        "membershipLevel": 3
    },
    {
        "name": "Hydrocon Green",
        "address": "Plot 20627 Block 3 Broadhurst, Gaborone",
        "phone": "+267 319 0055",
        "website": "http://hydrocon.org",
        "image": "images/hydrocon.webp",
        "membershipLevel": 1
    },
    {
        "name": "Sediba - VFM",
        "address": "Plot 28562, Fairgrounds Mall, Unit G26, Gaborone",
        "phone": "",
        "website": "http://sediba.co.bw",
        "image": "images/sediba.webp",
        "membershipLevel": 1
    },
    {
        "name": "Notwane Poultry",
        "address": "Plot 92/98 Commerce Park, Gaborone",
        "phone": "+267 316 0500",
        "website": "https://notwanepoultry.co.bw/",
        "image": "images/notwane.webp",
        "membershipLevel": 2
    }
];

// Function to display members as either a grid or list
function displayMembers(viewType) {
    const memberContainer = document.getElementById('member-container');
    memberContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name} Logo">
            <div class="member-info">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>Phone: ${member.phone || 'N/A'}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            </div>
        `;
        memberContainer.appendChild(memberCard);
    });

    // Update container class based on the view type
    memberContainer.className = viewType === 'list' ? 'list-view' : 'grid-view';
}

// Function to get membership level name
function getMembershipLevel(level) {
    switch(level) {
        case 1: return 'Bronze';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Event listeners for the view toggle buttons
document.getElementById('gridView').addEventListener('click', () => displayMembers('grid'));
document.getElementById('listView').addEventListener('click', () => displayMembers('list'));

// Initial load
displayMembers('grid');
