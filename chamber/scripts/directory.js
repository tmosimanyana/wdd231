// Example data for businesses
const businesses = [
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

// Function to create the business directory entries
function createDirectoryEntries() {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear the memberList

    businesses.forEach(business => {
        // Create a container div for the business entry
        const businessCard = document.createElement('div');
        businessCard.className = 'business-card';

        // Create the image element with lazy loading
        const businessImage = document.createElement('img');
        businessImage.src = business.image;
        businessImage.alt = business.name;
        businessImage.loading = 'lazy';  // Lazy load the image

        // Create a heading for the business name
        const businessName = document.createElement('h3');
        businessName.textContent = business.name;

        // Create a paragraph for the business address
        const businessAddress = document.createElement('p');
        businessAddress.textContent = `Address: ${business.address}`;

        // Create a paragraph for the business phone
        const businessPhone = document.createElement('p');
        businessPhone.textContent = `Phone: ${business.phone}`;

        // Create a paragraph for the membership level
        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${business.membershipLevel}`;

        // Append the image, name, address, phone, and membership level to the business card
        businessCard.appendChild(businessImage);
        businessCard.appendChild(businessName);
        businessCard.appendChild(businessAddress);
        businessCard.appendChild(businessPhone);
        businessCard.appendChild(membershipLevel);

        // Append the business card to the memberList container
        memberList.appendChild(businessCard);
    });
}

// Call the function to populate the directory when the page loads
window.onload = createDirectoryEntries;
