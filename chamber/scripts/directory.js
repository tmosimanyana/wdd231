document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;

    // Toggle view between grid and list
    const toggleViewButton = document.getElementById('toggle-view');
    const memberContainer = document.getElementById('member-container');

    toggleViewButton.addEventListener('click', function() {
        if (memberContainer.classList.contains('grid-view')) {
            memberContainer.classList.remove('grid-view');
            memberContainer.classList.add('list-view');
            toggleViewButton.textContent = 'Switch to Grid View';
        } else {
            memberContainer.classList.remove('list-view');
            memberContainer.classList.add('grid-view');
            toggleViewButton.textContent = 'Switch to List View';
        }
    });

    // Example of adding member cards dynamically (You would replace this with your actual data fetching logic)
    const members = [
        { name: "Member One", description: "Description for Member One", imageUrl: "path/to/image1.jpg" },
        { name: "Member Two", description: "Description for Member Two", imageUrl: "path/to/image2.jpg" },
        { name: "Member Three", description: "Description for Member Three", imageUrl: "path/to/image3.jpg" },
        // Add more members as needed
    ];

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="${member.imageUrl}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;
        memberContainer.appendChild(card);
    });
});
