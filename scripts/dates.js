// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${currentYear} Rubia Magdalena Francesco | Madagascar`;

// Display the last modified date of the document dynamically
const lastModifiedDate = document.lastModified;
document.querySelector('footer p:last-child').textContent = `Last Update: ${lastModifiedDate}`;
