// Sample data ( can be  replaced  with a fetch call if needed)
const directoryData = [
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

// Function to populate the directory
function populateDirectory() {
    const directoryContent = document.getElementById('directory-content');
    directoryContent.innerHTML = ''; // Clear existing content

    directoryData.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'directory-entry';

        entryDiv.innerHTML = `
            <img src="${entry.image}" alt="${entry.name} Logo" class="business-logo" loading="lazy">
            <h3>${entry.name}</h3>
            <p>Address: ${entry.address}</p>
            <p>Phone: <a href="tel:${entry.phone.replace(/\s+/g, '')}">${entry.phone}</a></p>
            <p>Membership Level: ${entry.membershipLevel}</p>
        `;

        directoryContent.appendChild(entryDiv);
    });
}

// Call the function to populate the directory when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateDirectory);
