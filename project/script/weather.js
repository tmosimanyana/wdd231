// Update current year dynamically in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Update last modified date dynamically
document.getElementById('last-modified').textContent = document.lastModified;

// Fetch Weather Data from a public API (example: OpenWeatherMap)
const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my actual API key
const city = 'Molepolole'; // Replaced with the relevant city

const fetchWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        const temperature = data.main.temp;
        const windChill = data.wind.speed;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('windchill-value').textContent = `${windChill}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

// Call the fetchWeather function to update the weather information
fetchWeather();
