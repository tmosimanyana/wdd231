// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-view');
    const memberList = document.querySelector('.member-list');
    
    toggleButton.addEventListener('click', () => {
        memberList.classList.toggle('list-view');
        memberList.classList.toggle('grid-view');
    });
});








