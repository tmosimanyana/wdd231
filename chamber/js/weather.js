document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your OpenWeatherMap API key
    const city = 'Gaborone';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = Math.round(data.main.temp);
            document.getElementById('weather-description').textContent = capitalizeWords(data.weather.map(w => w.description).join(', '));
            updateForecast(city, apiKey);
        });
});

function capitalizeWords(text) {
    return text.replace(/\b\w/g, char => char.toUpperCase());
}

function updateForecast(city, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                const day = data.list[i * 8];
                const temp = Math.round(day.main.temp);
                const weather = capitalizeWords(day.weather.map(w => w.description).join(', '));
                forecastContainer.innerHTML += `<p>Day ${i + 1}: ${temp}&#8451; - ${weather}</p>`;
            }
        });
}
