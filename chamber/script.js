// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-view');
    const memberList = document.querySelector('.member-list');

    toggleButton.addEventListener('click', function() {
        memberList.classList.toggle('list-view');
        memberList.classList.toggle('grid-view');
    });

    // Example: Display last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});








