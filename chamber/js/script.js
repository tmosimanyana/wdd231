// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to update the "Last Modified" date
    function updateLastModified() {
        const lastModified = document.getElementById('last-modified');
        const date = new Date(document.lastModified);
        lastModified.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    // Toggle view between grid and list
    document.getElementById('toggle-view').addEventListener('click', function() {
        const memberList = document.querySelector('.member-list');
        if (memberList.classList.contains('grid-view')) {
            memberList.classList.remove('grid-view');
            memberList.classList.add('list-view');
        } else {
            memberList.classList.remove('list-view');
            memberList.classList.add('grid-view');
        }
    });

    // Call function to update last modified date
    updateLastModified();
});
