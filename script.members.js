async function fetchMembers() {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const membersData = await response.json();
        displaySpotlights(membersData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displaySpotlights(membersData) {
    const silverGoldMembers = membersData.filter(member => 
        member.membershipLevel.includes("Level 2") || member.membershipLevel.includes("Level 3")
    );

    if (silverGoldMembers.length === 0) {
        document.getElementById("spotlight-container").innerHTML = "<p>No spotlight members available.</p>";
        return;
    }

    const spotlights = [];
    const numberOfSpotlights = Math.min(3, silverGoldMembers.length);
    while (spotlights.length < numberOfSpotlights) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        const selectedMember = silverGoldMembers[randomIndex];

        if (!spotlights.includes(selectedMember)) {
            spotlights.push(selectedMember);
        }
    }

    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = "";
    spotlights.forEach(member => {
        const memberHtml = `
            <div class="spotlight">
                <img src="${member.image}" alt="${member.name} Logo" />
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <a href="#" class="website-link">Visit Website</a>
            </div>
        `;
        spotlightContainer.innerHTML += memberHtml;
    });
}

// Call the function on page load
fetchMembers();
