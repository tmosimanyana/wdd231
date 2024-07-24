document.addEventListener("DOMContentLoaded", function() {
    // Lazy loading
    const lazyImages = document.querySelectorAll('img.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });

    // Visitor message
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit, 10));
        const timeDiff = currentTime - lastVisitDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (timeDiff < 24 * 60 * 60 * 1000) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            visitorMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitorMessage.textContent = `You last visited ${daysDiff} days ago.`;
        }
    } else {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentTime.toString());
});

