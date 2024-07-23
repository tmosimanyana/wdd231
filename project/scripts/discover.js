document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = (image) => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.onload = () => {
                image.classList.add('loaded');
            };
        }
    };

    const imgOptions = {
        threshold: 0,
        rootMargin: '0px 0px 256px 0px'
    };

    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);

    lazyImages.forEach(image => {
        imgObserver.observe(image);
    });

    // Visitor message
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    localStorage.setItem('lastVisit', now);

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }
});
