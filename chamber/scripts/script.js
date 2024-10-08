document.addEventListener("DOMContentLoaded", async function() {
    const businessListElement = document.getElementById('business-list');
    const toggleViewButton = document.getElementById('toggleView');
    
    // Fetch and display members data
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error("Failed to fetch members data.");
        
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching or displaying members:', error);
    }

    // Function to display members
    function displayMembers(members) {
        businessListElement.innerHTML = '';  // Clear existing content
        members.forEach(member => {
            const businessDiv = document.createElement('div');
            businessDiv.classList.add('business');
            businessDiv.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name} Logo" class="business-logo">
                <p>${member.info}</p>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;
            businessListElement.appendChild(businessDiv);
        });
    }

    // Toggle between grid and list views
    toggleViewButton.addEventListener('click', () => {
        businessListElement.classList.toggle('grid-view');
        businessListElement.classList.toggle('list-view');
    });

    // Display copyright year and last modification date in footer
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('copyright-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;
});
