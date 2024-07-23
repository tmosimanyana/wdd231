document.addEventListener('DOMContentLoaded', () => {
    // Handle localStorage for last visit
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    localStorage.setItem('lastVisit', now.toISOString());

    const messageElement = document.getElementById('visitor-message');
    if (lastVisit) {
        messageElement.textContent = `Welcome back! Your last visit was on ${new Date(lastVisit).toLocaleDateString()}`;
    } else {
        messageElement.textContent = 'Welcome to our site!';
    }

    // Initialize lazy loading
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Use src from data-src attribute
                img.onload = () => img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    };

    const imageObserver = new IntersectionObserver(lazyLoad, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

