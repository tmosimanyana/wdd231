const organizations = [
    {
        "name": "BAMB Headquarters",
        "address": "123 BAMB Rd, Kweneng",
        "phone": "+267 123 4567",
        "image": "images/bamb.webp",
        "membershipLevel": "Membership Level 3"
    },
    {
        "name": "AgriFeed GICP",
        "address": "456 Agri Rd, Kweneng",
        "phone": "+267 765 4321",
        "image": "images/agrifeed.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "Greenhouse Technologies",
        "address": "789 Greenhouse Ave, Kweneng",
        "phone": "+267 111 2222",
        "image": "images/greenhouse.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "AFGRI Equipment",
        "address": "321 AFGRI St, Kweneng",
        "phone": "+267 333 4444",
        "image": "images/afgri.webp",
        "membershipLevel": "Membership Level 3"
    },
    {
        "name": "Hydrocon Green",
        "address": "654 Hydrocon Way, Kweneng",
        "phone": "+267 555 6666",
        "image": "images/hydrocon.webp",
        "membershipLevel": "Membership Level 1"
    },
    {
        "name": "Sediba - VFM",
        "address": "987 Sediba Rd, Kweneng",
        "phone": "+267 777 8888",
        "image": "images/sediba.webp",
        "membershipLevel": "Membership Level 1"
    },
    {
        "name": "Notwane Poultry",
        "address": "543 Notwane Rd, Kweneng",
        "phone": "+267 999 0000",
        "image": "images/notwane.webp",
        "membershipLevel": "Membership Level 2"
    },
    {
        "name": "Agrichem",
        "address": "210 Agrichem St, Kweneng",
        "phone": "+267 333 2222",
        "image": "images/agrichem.webp",
        "membershipLevel": "Membership Level 1"
    }
];

// Function to create and append organization cards
function loadOrganizations() {
    const organizationList = document.getElementById("organization-list");

    organizations.forEach(org => {
        const orgCard = document.createElement('div');
        orgCard.classList.add('org-card');

        const orgImage = document.createElement('img');
        orgImage.src = org.image;
        orgImage.alt = org.name;
        orgImage.loading = "lazy"; // Native lazy loading

        const orgInfo = document.createElement('div');
        orgInfo.classList.add('org-info');
        orgInfo.innerHTML = `
            <h2>${org.name}</h2>
            <p>Address: ${org.address}</p>
            <p>Phone: ${org.phone}</p>
            <p>Membership Level: ${org.membershipLevel}</p>
        `;

        orgCard.appendChild(orgImage);
        orgCard.appendChild(orgInfo);
        organizationList.appendChild(orgCard);
    });
}

// Call the function to load organizations
loadOrganizations();

// Last modified date
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
});
