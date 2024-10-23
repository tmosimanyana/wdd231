// DOM Content Loaded event listener to ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Functionality for responsive navigation toggle (mobile menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Functionality for smooth scroll to sections
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example of a toggle between grid and list view
    const toggleButton = document.querySelector('.toggle-view');
    const memberList = document.querySelector('.member-list');

    if (toggleButton && memberList) {
        toggleButton.addEventListener('click', () => {
            memberList.classList.toggle('grid-view');
            memberList.classList.toggle('list-view');
        });
    }

    // Example modal handling for displaying membership benefits
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        const openModals = document.querySelectorAll('.modal');
        openModals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Dynamic copyright year
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }

    // Example error message handling
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000); // Hide error message after 5 seconds
    }

    // Form submission with confirmation
    const joinForm = document.querySelector('#joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Perform form validation or processing here
            window.location.href = 'thankyou.html'; // Redirect to confirmation page
        });
    }

});
