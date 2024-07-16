document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'API5c7e429e1b20f30b60de00a18bcc0e92';
    const city = 'Gaborone';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.getElementById('weather-widget');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            weatherWidget.innerHTML = `
                <img src="${icon}" alt="${description}">
                <p>${temperature}°C, ${description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
