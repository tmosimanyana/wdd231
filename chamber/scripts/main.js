document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");

    // Set the current year and last modified date
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Fetch members data from JSON
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Function to display members
    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Clear previous content

        members.forEach(member => {
            // Create a div for each member card
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            
            // Create and append the image (company logo)
            const img = document.createElement('img');
            img.src = member.image;
            img.alt = `${member.name} logo`;
            memberCard.appendChild(img);

            // Create and append the member details
            const memberInfo = document.createElement('div');
            memberInfo.classList.add('member-info');
            
            const name = document.createElement('h2');
            name.textContent = member.name;
            memberInfo.appendChild(name);

            const address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;
            memberInfo.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;
            memberInfo.appendChild(phone);

            const website = document.createElement('a');
            website.href = member.website;
            website.textContent = 'Visit Website';
            website.target = '_blank';
            memberInfo.appendChild(website);

            memberCard.appendChild(memberInfo);
            membersContainer.appendChild(memberCard);
        });
    }

    // Toggle between Grid and List views
    gridViewButton.addEventListener("click", () => {
        membersContainer.classList.remove("list");
        membersContainer.classList.add("grid");
    });

    listViewButton.addEventListener("click", () => {
        membersContainer.classList.remove("grid");
        membersContainer.classList.add("list");
    });

    // Load members on page load
    fetchMembers();
});
