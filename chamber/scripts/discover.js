document.addEventListener("DOMContentLoaded", function() {
    const visitorMessage = document.getElementById("visitorMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    
    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        visitorMessage.textContent = `Welcome back! It's been ${daysSinceLastVisit} days since your last visit.`;
    } else {
        visitorMessage.textContent = "Welcome to the Kweneng Agriculture Chamber of Commerce!";
    }
    
    localStorage.setItem("lastVisit", new Date());

    // Update the footer's year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
