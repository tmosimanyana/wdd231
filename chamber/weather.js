// weather.js
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'ChamberLocation'; // Replace with your city
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherSection = document.getElementById('weather-content');
            const currentWeather = data.list[0];
            const temperature = Math.round(currentWeather.main.temp);
            const weatherDescription = data.list[0].weather.map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1)).join(', ');
            const forecast = data.list.slice(1, 4);

            weatherSection.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${weatherDescription}</p>
                <h3>3-Day Forecast</h3>
                ${forecast.map(day => `
                    <div>
                        <p>${new Date(day.dt_txt).toLocaleDateString()}: ${Math.round(day.main.temp)}°C</p>
                    </div>
                `).join('')}
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
