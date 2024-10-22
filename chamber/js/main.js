document.addEventListener('DOMContentLoaded', () => {
    const membersGrid = document.getElementById('members-grid');
    const toggleViewBtn = document.getElementById('toggle-view');

    // Fetch and display members data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(member => {
                const memberCard = `
                    <div class="member-card">
                        <img src="${member.image}" alt="${member.name}">
                        <div>
                            <h2>${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">Visit Website</a>
                        </div>
                    </div>`;
                membersGrid.innerHTML += memberCard;
            });
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Toggle between grid and list view
    toggleViewBtn.addEventListener('click', () => {
        membersGrid.classList.toggle('list-view');
    });

    // Display the current year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
