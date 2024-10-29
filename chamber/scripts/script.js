// Weather Fetching Function
async function fetchWeather() {
    const weatherCard = document.querySelector('.weather-card');
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // replaced with my OpenWeather API key
    const lat = '-24.6604';
    const lon = '25.9126'; // Updated coordinates for Gaborone city
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherCard.querySelector('.temperature').textContent = `${data.main.temp} °C`;
        weatherCard.querySelector('.conditions').textContent = data.weather[0].description;
        weatherCard.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherCard.innerHTML = '<p>Weather data not available at the moment.</p>';
    }
}
