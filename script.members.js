// script.members.js

// Assuming the membersData array is defined as shown above

function getRandomSpotlights() {
    // Filter for members with Silver (Level 2) or Gold (Level 3) memberships
    const silverGoldMembers = membersData.filter(member => 
        member.membershipLevel.includes("Level 2") || member.membershipLevel.includes("Level 3")
    );

    // If there are not enough members, show a message
    if (silverGoldMembers.length === 0) {
        document.getElementById("spotlight-container").innerHTML = "<p>No spotlight members available.</p>";
        return;
    }

    // Select 2-3 random members
    const spotlights = [];
    const numberOfSpotlights = Math.min(3, silverGoldMembers.length); // Limit to max 3
    while (spotlights.length < numberOfSpotlights) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        const selectedMember = silverGoldMembers[randomIndex];
        
        // Ensure the selected member is unique
        if (!spotlights.includes(selectedMember)) {
            spotlights.push(selectedMember);
        }
    }

    // Populate the spotlight container
    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = ""; // Clear existing content
    spotlights.forEach(member => {
        const memberHtml = `
            <div class="spotlight">
                <img src="${member.image}" alt="${member.name} Logo" />
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <a href="#" class="website-link">Visit Website</a> <!-- Add actual website link if available -->
            </div>
        `;
        spotlightContainer.innerHTML += memberHtml;
    });
}

// Call the function to populate the spotlight section
getRandomSpotlights();
