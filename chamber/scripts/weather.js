document.addEventListener("DOMContentLoaded", function () {
    const weatherElement = document.getElementById('weather');
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Gaborone';
    const country = 'BW';

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const current = data.list[0];
            const forecast = data.list.slice(1, 4);

            // Display current weather
            const currentWeather = `
                <p>Current Temperature: ${Math.round(current.main.temp)}°C</p>
                <p>Weather: ${current.weather.map(w => w.description).join(', ').replace(/\b\w/g, char => char.toUpperCase())}</p>
            `;

            // Display 3-day forecast
            const forecastWeather = forecast.map(day => `
                <p>${new Date(day.dt_txt).toLocaleDateString('en-GB', { weekday: 'long' })}: ${Math.round(day.main.temp)}°C</p>
            `).join('');

            weatherElement.innerHTML = currentWeather + forecastWeather;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherElement.innerHTML = '<p>Weather data is unavailable at the moment.</p>';
        });
});
