document.addEventListener("DOMContentLoaded", async () => {
    // Elements
    const membersContainer = document.getElementById("memebers-container");
    const viewToggleBtn = document.createElement("button");
    viewToggleBtn.textContent = "Toggle View";
    viewToggleBtn.id = "view-toggle";
    membersContainer.parentNode.insertBefore(viewToggleBtn, spotlightContainer);

    // Function to fetch and display member data
    async function fetchMembers() {
        try {
            const response = await fetch("members.json");
            const members = await response.json();
            displayMembers(members, "grid");
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Function to display members in a specified layout (grid or list)
    function displayMembers(members, layout) {
        membersContainer.innerHTML = ""; // Clear current display

        members.forEach((member) => {
            const memberCard = document.createElement("div");
            memberCard.className = `members-item ${layout}`;
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <a href="${member.website}">Visit Website</a>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // Event listener to toggle between grid and list views
    viewToggleBtn.addEventListener("click", () => {
        const currentLayout = membersContainer.firstChild.classList.contains("grid") ? "list" : "grid";
        displayMembers([...membersContainer.children].map(card => ({
            name: card.querySelector("h3").textContent,
            phone: card.querySelector("p:nth-of-type(1)").textContent.replace("Phone: ", ""),
            address: card.querySelector("p:nth-of-type(2)").textContent.replace("Address: ", ""),
            membershipLevel: card.querySelector("p:nth-of-type(3)").textContent.replace("Membership Level: ", ""),
            website: card.querySelector("a").href,
            image: card.querySelector("img").src
        })), currentLayout);
    });

    fetchMembers();
});
