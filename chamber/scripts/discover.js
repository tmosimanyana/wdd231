// JavaScript for Discover Page Functionality

// Visitor Message based on time of day
const visitorMessageElement = document.getElementById("visitorMessage");

function getVisitorMessage() {
    const currentTime = new Date().getHours();
    let message;

    if (currentTime < 12) {
        message = "Good morning! Welcome to Kweneng.";
    } else if (currentTime < 18) {
        message = "Good afternoon! Explore what Kweneng has to offer.";
    } else {
        message = "Good evening! Discover the beauty of Kweneng.";
    }

    visitorMessageElement.textContent = message;
}

// Call function to display the visitor message
getVisitorMessage();

// Dynamic Year in Footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Last Modified Date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;
