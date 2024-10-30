document.addEventListener("DOMContentLoaded", () => {
    fetchMembers();
});

async function fetchMembers() {
    try {
        const response = await fetch("members.json"); // Make sure this path points to the correct location
        const members = await response.json();

        const spotlightContainer = document.getElementById("businessSpotlightContent");
        spotlightContainer.innerHTML = ""; // Clear any existing content

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            `;

            spotlightContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}
