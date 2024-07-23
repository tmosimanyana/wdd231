document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.add("loaded");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.add("loaded");
        });
    }

    // Visitor message using localStorage
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date().getTime();

    if (lastVisit) {
        const timeSinceLastVisit = currentVisit - lastVisit;
        const daysSinceLastVisit = Math.floor(timeSinceLastVisit / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit === 0) {
            visitorMessage.textContent = 'Welcome back! You visited earlier today.';
        } else if (daysSinceLastVisit === 1) {
            visitorMessage.textContent = 'Welcome back! You visited yesterday.';
        } else {
            visitorMessage.textContent = `Welcome back! You visited ${daysSinceLastVisit} days ago.`;
        }
    } else {
        visitorMessage.textContent = 'Welcome to our Discover page!';
    }

    localStorage.setItem('lastVisit', currentVisit);
});
