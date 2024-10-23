document.addEventListener("DOMContentLoaded", () => {
    // 1. Update copyright year
    const footerYear = new Date().getFullYear();
    const footer = document.querySelector("footer p");
    footer.innerHTML = `&copy; ${footerYear} Kweneng Agriculture Chamber of Commerce. All rights reserved. Created by Tinny Bothepha Mosimanyana.`;

    // 2. Smooth Scroll for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Image Lazy Loading (in case of images added dynamically)
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Ensure you use data-src attribute for lazy loading
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });

    // 4. Accessibility - Highlight focused elements
    document.addEventListener('focus', (event) => {
        if (event.target.matches('button, a, input, select, textarea')) {
            event.target.classList.add('focus-highlight');
        }
    }, true);

    document.addEventListener('blur', (event) => {
        if (event.target.matches('button, a, input, select, textarea')) {
            event.target.classList.remove('focus-highlight');
        }
    }, true);

    // 5. Modal for Site Purpose Details
    const modalTrigger = document.createElement('button');
    modalTrigger.textContent = 'More About Our Purpose';
    modalTrigger.className = 'modal-trigger';
    document.querySelector('.site-purpose').appendChild(modalTrigger);

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Site Purpose Details</h3>
            <p>The Kweneng Agriculture Chamber of Commerce aims to foster growth in the agricultural sector by providing various resources and support for local businesses. We organize workshops, share valuable information, and create a community for agricultural entrepreneurs.</p>
        </div>`;
    document.body.appendChild(modal);

    modalTrigger.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
