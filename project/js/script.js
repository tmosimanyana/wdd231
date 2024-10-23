document.addEventListener("DOMContentLoaded", () => {
    // Update the footer with the current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString();

    // Static inputs for temperature and wind speed
    const temperature = 25; // Example temperature in °C
    const windSpeed = 5; // Example wind speed in km/h

    // Calculate wind chill if conditions are met
    const windchillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill-value').textContent = windchillValue !== null ? `${windchillValue}°C` : 'N/A';
});

// Function to calculate wind chill
function calculateWindChill(temp, wind) {
    if ((temp <= 10 && wind > 4.8) || (temp <= 50 && wind > 3)) {
        // Formula for wind chill
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
    }
    return null;
}
