[
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
        "address": "654 Health Ave, Molepolole",
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
        "name": "Ledu farms",
        "address": "P.O.Box 894 Molepolole, Botswana",
        "phone": "+267 76376661",
        "url": "https://www.cybo.com/BW-biz/ledu-farms",
        "image": "ledu_farms.jpeg",
        "membership_level": 1
    }
]

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
}

function displayMembers(members, view = 'grid') {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.url}" target="_blank">Visit Website</a>
            <br/>
            <img src="images/${member.image}" alt="${member.name}" style="width: 100px; height: auto;" />
        `;
        container.appendChild(card);
    });

    if (view === 'list') {
        container.classList.remove('grid');
    } else {
        container.classList.add('grid');
    }
}

document.getElementById('toggle-view').addEventListener('click', () => {
    const currentView = document.getElementById('members-container').classList.contains('grid') ? 'grid' : 'list';
    displayMembers(membersData, currentView === 'grid' ? 'list' : 'grid');
});

let membersData = [];

window.onload = async function() {
    membersData = await fetchMembers();
    displayMembers(membersData);

    const yearSpan = document.getElementById('footer-year');
    yearSpan.innerHTML = new Date().getFullYear();

    const modifiedSpan = document.getElementById('footer-modified');
    modifiedSpan.innerHTML = document.lastModified;
};
