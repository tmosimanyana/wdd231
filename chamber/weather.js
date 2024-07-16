const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
const city = 'Gaborone';
const weatherContent = document.getElementById('weather-content');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp.toFixed(0);
        const description = data.weather.map(w => capitalize(w.description)).join(', ');

        weatherContent.innerHTML = `
            <p>Current Temperature: ${temp}°C</p>
            <p>Current Weather: ${description}</p>
        `;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=4&appid=${apiKey}`)
            .then(response => response.json())
            .then(forecastData => {
                const forecast = forecastData.list.slice(1).map(item => {
                    const date = new Date(item.dt * 1000).toDateString();
                    const temp = item.main.temp.toFixed(0);
                    return `<p>${date}: ${temp}°C</p>`;
                }).join('');

                weatherContent.innerHTML += `<h3>3-Day Forecast</h3>${forecast}`;
            });
    })
    .catch(error => {
        weatherContent.innerHTML = `<p>Failed to load weather data.</p>`;
        console.error('Error fetching weather data:', error);
    });

function capitalize(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}
