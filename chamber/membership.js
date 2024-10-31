// Modal management
document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const modalId = event.target.dataset.modal;
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', event => {
        const modalId = event.target.getAttribute('data-close');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
