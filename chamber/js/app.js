document.addEventListener("DOMContentLoaded", () => {
    // Detailed member data
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

    const membersSection = document.getElementById("members");
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");

    // Function to display members
    const displayMembers = (view) => {
        membersSection.innerHTML = ""; // Clear previous members

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.className = view === "grid" ? "member-item" : "member-item-list";
            memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersSection.appendChild(memberDiv);
        });
    };

    // Event listeners for view toggles
    gridViewButton.addEventListener("click", () => {
        displayMembers("grid");
        membersSection.className = "grid-view"; // Set class for grid view
    });

    listViewButton.addEventListener("click", () => {
        displayMembers("list");
        membersSection.className = "list-view"; // Set class for list view
    });

    // Initial display
    displayMembers("grid");
});
