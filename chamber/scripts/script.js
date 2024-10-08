document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch('data/members.json'); // Update path to 'data/members.json'
        if (!response.ok) throw new Error("Failed to fetch members data.");
        
        const members = await response.json();
        const businessListElement = document.getElementById('business-list');

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
    } catch (error) {
        console.error('Error fetching or displaying members:', error);
    }
});
