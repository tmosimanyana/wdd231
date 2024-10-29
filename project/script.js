document.addEventListener("DOMContentLoaded", () => {
    loadDirectory();
    loadWeather();

    const form = document.getElementById("membership-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for applying!");
    });
});

// Fetching directory data (placeholder JSON data)
async function loadDirectory() {
    const directoryContent = document.getElementById("directory-content");
    try {
        const response = await fetch("directory.json"); // Adjust with actual path
        const data = await response.json();
        directoryContent.innerHTML = data.map(business => 
            `<div><h3>${business.name}</h3><p>${business.services}</p></div>`
        ).join("");
    } catch (error) {
        directoryContent.textContent = "Failed to load directory.";
    }
}

// Weather API Integration (fetch data and display it)
async function loadWeather() {
    const weatherInfo = document.getElementById("weather-info");
    try {
        const response = await fetch("https://api.open-meteo.com/weather?location=Molepolole"); // Adjust API as needed
        const weatherData = await response.json();
        weatherInfo.textContent = `Current weather: ${weatherData.current.temp}°C, ${weatherData.current.condition}`;
    } catch (error) {
        weatherInfo.textContent = "Weather information unavailable.";
    }
}
