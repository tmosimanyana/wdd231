window.onload = function() {
    // Set the current date and time when the form is loaded
    const timestampField = document.getElementById('timestamp');
    const currentDate = new Date();
    timestampField.value = currentDate.toISOString();
    
    // Set the current year and last modified date in the footer
    document.getElementById('year').textContent = currentDate.getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Modal logic
    const modals = document.querySelectorAll('.modal');
    const infoLinks = document.querySelectorAll('.info-link');
    const closeButtons = document.querySelectorAll('.close');

    // Open modals
    infoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-close');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Close modals if clicking outside of modal content
    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
};
