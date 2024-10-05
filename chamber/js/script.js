// Fetch and display members data
async function fetchMembers() {
    const response = await fetch('members.json');
    const members = await response.json();

    const directory = document.getElementById('directory');
    directory.innerHTML = '';

    members.forEach(member => {
        const card = `
        <div class="business-card">
            <img src="${member.image}" alt="${member.name}">
            <h2 class="business-name">${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.url}">Visit Website</a>
        </div>`;
        directory.innerHTML += card;
    });
}

// Toggle between Grid and List Views
function toggleView() {
    const directory = document.getElementById('directory');
    directory.classList.toggle('list-view');
}

// Dynamic Footer: Current Year and Last Modified Date
function updateFooter() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    updateFooter();

    // Attach event listener to toggle button
    const toggleButton = document.getElementById('viewToggle');
    toggleButton.addEventListener('click', toggleView);
});
