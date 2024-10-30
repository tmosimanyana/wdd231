const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
const city = 'Kweneng'; // Replace with the appropriate city or use geolocation

async function getWeather() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const temperature = Math.round(weatherData.main.temp);
        const weatherDescription = weatherData.weather.map(event => 
            event.description.charAt(0).toUpperCase() + event.description.slice(1)
        ).join(', ');

        document.getElementById('currentWeather').textContent = `${temperature}°C - ${weatherDescription}`;
        
        // Populate weather details
        const weatherDetails = `
            <li>High: ${Math.round(weatherData.main.temp_max)}°C</li>
            <li>Low: ${Math.round(weatherData.main.temp_min)}°C</li>
            <li>Humidity: ${weatherData.main.humidity}%</li>
            <li>Sunrise: ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</li>
            <li>Sunset: ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</li>
        `;
        document.getElementById('weatherDetails').innerHTML = weatherDetails;

        // Fetch and display forecast
        await getForecast(forecastUrl);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getForecast(forecastUrl) {
    try {
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastList = document.getElementById('forecastList');
        forecastList.innerHTML = '';

        // Display the first three days of forecast
        for (let i = 0; i < 3; i++) {
            const day = forecastData.list[i * 8]; // Get forecast for every 8 hours
            const date = new Date(day.dt * 1000).toLocaleDateString();
            const temp = Math.round(day.main.temp);
            const desc = day.weather.map(event => 
                event.description.charAt(0).toUpperCase() + event.description.slice(1)
            ).join(', ');

            const listItem = document.createElement('li');
            listItem.textContent = `${date}: ${temp}°C - ${desc}`;
            forecastList.appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Call the function to fetch weather data on page load
getWeather();
