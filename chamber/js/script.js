document.addEventListener("DOMContentLoaded", function () {
    const directoryElement = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");
    let isGridView = true;

    // Fetch member data from JSON
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    // Display members in grid or list view
    function displayMembers(members) {
        directoryElement.innerHTML = ""; // Clear current content
        const viewClass = isGridView ? "grid-view" : "list-view";
        
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("business-card", viewClass);
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <div class="business-info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
            directoryElement.appendChild(memberElement);
        });
    }

    // Toggle between grid and list view
    toggleButton.addEventListener("click", () => {
        isGridView = !isGridView;
        fetchMembers();
    });

    // Set copyright year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Initial fetch
    fetchMembers();
});
