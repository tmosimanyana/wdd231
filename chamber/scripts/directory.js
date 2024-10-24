document.addEventListener('DOMContentLoaded', () => {
    const members = [
        
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
        ]
        
    const memberList = document.getElementById('memberList');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    // Function to display members as cards (grid)
    function displayGridView() {
        memberList.className = 'grid';
        memberList.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    }

    // Function to display members as a list
    function displayListView() {
        memberList.className = 'list';
        memberList.innerHTML = members.map(member => `
            <div class="member-card">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    }

    // Toggle between views
    gridViewButton.addEventListener('click', displayGridView);
    listViewButton.addEventListener('click', displayListView);

    // Display default view
    displayGridView();

    // Display copyright year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
