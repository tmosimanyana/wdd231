const weatherApiKey = 'YOUR_ACTUAL_API_KEY';  // Replace with your actual API key
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Molepolole,BW&appid=${weatherApiKey}&units=metric`;

document.addEventListener('DOMContentLoaded', function() {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
