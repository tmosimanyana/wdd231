// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions for calculation are met
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Wind chill calculation formula
        return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A"; // Not applicable
    }
}

// Static values for temperature and wind speed
const temperature = 25; // Example: 25°C
const windSpeed = 5; // Example: 5 km/h

// Calculate wind chill
const windChillValue = calculateWindChill(temperature, windSpeed);

// Display the wind chill value in the HTML
document.getElementById('windchill-value').textContent = windChillValue;

// Update footer with current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified).toLocaleDateString();

const footer = document.createElement('footer');
footer.innerHTML = `
    <p>&copy; ${currentYear} Kweneng Agriculture Chamber of Commerce. Last modified: ${lastModified}</p>
`;
document.body.appendChild(footer);
