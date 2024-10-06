// Sample JSON data ( can be also fetched  from an external source)
const memberData = [
    {
        "name": "Moleps Poultry",
        "address": "P.O.Box 404326, Gaborone, Botswana",
        "phone": "+267 397 5246",
        "url": "https://www.localbotswana.com/company/3043/Moleps_Poultry",
        "image": "moleps_poultry.png",
        "membership_level": 1
    },
    {
        "name": "Builders Mart T/A Choppies Hardware",
        "address": "Plot 146, Molepolole, Botswana",
        "phone": "+267 592 1603",
        "url": "https://www.brabys.com/bw/molepolole/hardware-retailers/builders-mart-ta-choppies-hardware",
        "image": "molepolole_hardware.webp",
        "membership_level": 2
    },
    {
        "name": "Prestige Bakery (PTY) LTD",
        "address": "P.O. Box: 1170, Molepolole, Botswana",
        "phone": "+267 5920426",
        "url": "https://www.localbotswana.com/company/11747/PRESTIGE_BAKERY_PTY_LTD",
        "image": "molepolole_bakery.png",
        "membership_level": 3
    },
    {
        "name": "Clicks Pharmacy Molepolole",
        "address": "Mafenyatlala Mall, Molepolole",
        "phone": "590 6015",
        "url": "https://clicks.co.za/",
        "image": "Clicks-logo.svg",
        "membership_level": 1
    },
    {
        "name": "Choppies Supermarket",
        "address": "123 Grocery Rd, Molepolole",
        "phone": "+267 592 0059",
        "url": "http://choppies.co.bw",
        "image": "choppies_supermarket.png",
        "membership_level": 2
    },
    {
        "name": "Hair Affair",
        "address": "P.O.Box 142, Molepolole, Botswana",
        "phone": "+267 592 0022",
        "url": "https://www.localbotswana.com/company/8604/Hair_Affair",
        "image": "hair-affair.png",
        "membership_level": 3
    },
    {
        "name": "Ledu Farms",
        "address": "P.O.Box 142, Molepolole, Botswana",
        "phone": "+267 397 5246",
        "url": "https://www.localbotswana.com/company/15236/Ledu_Farms",
        "image": "ledu_farms.jpeg",
        "membership_level": 1
    }
];

// Function to display member data
function displayMembers() {
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

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Update last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;
