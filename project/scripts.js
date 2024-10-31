// Set the current timestamp in the hidden input field
document.getElementById('timestamp').value = new Date().toISOString();

// Handle membership modal display
const infoLinks = document.querySelectorAll('.info-link');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

infoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "none";
    });
});

window.addEventListener('click', function(e) {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Update year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
