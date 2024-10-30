// scripts/spotlight.js
const members = [
    { name: "BAMB Headquarters", address: "123 BAMB Rd, Kweneng", phone: "+267 123 4567", image: "images/bamb.webp", membershipLevel: "Gold" },
    { name: "AgriFeed GICP", address: "456 Agri Rd, Kweneng", phone: "+267 765 4321", image: "images/agrifeed.webp", membershipLevel: "Silver" },
    { name: "Greenhouse Technologies", address: "789 Greenhouse Ave, Kweneng", phone: "+267 111 2222", image: "images/greenhouse.webp", membershipLevel: "Silver" },
    { name: "AFGRI Equipment", address: "321 AFGRI St, Kweneng", phone: "+267 333 4444", image: "images/afgri.webp", membershipLevel: "Gold" },
    { name: "Hydrocon Green", address: "654 Hydrocon Way, Kweneng", phone: "+267 555 6666", image: "images/hydrocon.webp", membershipLevel: "Bronze" },
    { name: "Sediba - VFM", address: "987 Sediba Rd, Kweneng", phone: "+267 777 8888", image: "images/sediba.webp", membershipLevel: "Bronze" }
];

function getRandomSpotlights(data, count) {
    return data.filter(m => ["Gold", "Silver"].includes(m.membershipLevel))
               .sort(() => 0.5 - Math.random())
               .slice(0, count);
}

function createModal(member) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => modal.remove());
}

export function renderSpotlights() {
    const spotlightContainer = document.getElementById('businessSpotlightContent');
    const randomSpotlights = getRandomSpotlights(members, 3);
    
    randomSpotlights.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(card);
        
        // Add event listener for modal
        card.addEventListener('click', () => createModal(member));
    });
}
