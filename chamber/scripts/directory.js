document.addEventListener("DOMContentLoaded", () => {
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");
    const memberList = document.getElementById("memberList");

    // Toggle to grid view
    gridViewButton.addEventListener("click", () => {
        memberList.classList.remove("list");
        memberList.classList.add("grid");
    });

    // Toggle to list view
    listViewButton.addEventListener("click", () => {
        memberList.classList.remove("grid");
        memberList.classList.add("list");
    });

    // Fetch and display members
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
            updateLastModified(); // Call to update last modified date
        })
        .catch(error => console.error("Error fetching member data:", error));

    // Function to display members
    function displayMembers(members) {
        memberList.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name} logo">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>Level: ${member.membershipLevel}</p>
                </div>
            </div>
        `).join("");
    }

    // Function to update the last modified date in the footer
    function updateLastModified() {
        const lastModifiedElement = document.getElementById("lastModified");
        lastModifiedElement.textContent = document.lastModified; // Set last modified date
    }
});
