document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Gaborone';
    
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.getElementById('weather-widget');
            const temperature = Math.round(data.main.temp);
            const descriptions = data.weather.map(event => event.description).join(', ');
            const capitalizedDescriptions = descriptions.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            weatherWidget.innerHTML = `
                <img src="${icon}" alt="${capitalizedDescriptions}">
                <p>${temperature}°C, ${capitalizedDescriptions}</p>
            `;
        })
        .catch(error => console.error('Error fetching current weather data:', error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastDays = document.getElementById('forecast-days');
            const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));
            dailyData.slice(0, 3).forEach((day, index) => {
                const date = new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
                const temperature = Math.round(day.main.temp);
                const description = day.weather.map(event => event.description).join(', ');
                const capitalizedDescriptions = description.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

                forecastDays.innerHTML += `
                    <div class="forecast-day">
                        <h3>${date}</h3>
                        <img src="${icon}" alt="${capitalizedDescriptions}">
                        <p>${temperature}°C, ${capitalizedDescriptions}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching weather forecast data:', error));
});
