// Set the current date and time in the timestamp field
document.getElementById("timestamp").value = new Date().toISOString();

// Get all modal links
const modalLinks = document.querySelectorAll("[data-modal]");

// Get all modals
const modals = document.querySelectorAll(".modal");

// Get all close buttons
const closeButtons = document.querySelectorAll(".close");

// Add click event listener to all modal links
modalLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const modalId = this.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "block";
    });
});

// Add click event listener to all close buttons
closeButtons.forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.parentElement.style.display = "none";
    });
});

// Close modals when clicking outside of them
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

// Display last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Display current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
