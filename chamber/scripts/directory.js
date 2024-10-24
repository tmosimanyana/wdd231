// scripts/directory.js

// Sample business data
const businesses = [
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
        "address": "Plot 59 Unit 1B, GICP, Gaborone 9999",
        "phone": "+267 390 1851",
        "website": "http://agrifeed.co.bw",
        "image": "images/agrifeed.webp",
        "membershipLevel": 2
    },
    {
        "name": "Greenhouse Technologies",
        "address": "Plot 20689 Sekotlo Rd, Gaborone 9999",
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
        "address": "Plot 20627 Block 3 Broadhurst, Gaborone 7441",
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

// Function to display businesses in the selected view
const displayBusinesses = (viewType) => {
    const directoryContainer = document.getElementById('directory-container');
    directoryContainer.innerHTML = ""; // Clear previous content

    businesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.classList.add('business-item', viewType);
        businessItem.innerHTML = `
            <img src="${business.image}" alt="${business.name}" class="business-image">
            <h3>${business.name}</h3>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone ? business.phone : 'N/A'}</p>
            <p><strong>Website:</strong> <a href="${business.website}" target="_blank">${business.website}</a></p>
            <p><strong>Membership Level:</strong> ${business.membershipLevel}</p>
        `;
        directoryContainer.appendChild(businessItem);
    });
};

// Event listeners for view buttons
document.getElementById('grid-view-btn').addEventListener('click', () => {
    displayBusinesses('grid-view');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    displayBusinesses('list-view');
});

// Initial display
displayBusinesses('grid-view');
