document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const modalId = link.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modalId = closeButton.getAttribute('data-close');
        document.getElementById(modalId).style.display = 'none';
    });
});

window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
