document.addEventListener('DOMContentLoaded', () => {
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    localStorage.setItem('lastVisit', timestamp);

    if (!lastVisit) {
        visitorMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const daysSinceLastVisit = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = 'Back so soon! Awesome!';
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }
});
