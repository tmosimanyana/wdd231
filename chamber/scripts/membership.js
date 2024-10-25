// scripts/membership.js

document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    const infoLinks = document.querySelectorAll('.info-link');

    // Open modal
    infoLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = event.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-close');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
