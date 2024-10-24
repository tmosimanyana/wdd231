// Fetch weather data using the OpenWeatherMap API
const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // replaced with my actual API key
const city = 'molepolole';
const country = 'BW'; // Country code for Botswana
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

// Function to capitalize each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch and display the weather data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.weather.map(event => capitalizeWords(event.description)).join(', ');
        const currentTemp = Math.round(data.main.temp);
        const currentWeatherHTML = `
            <p>Temperature: ${currentTemp}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;
        document.getElementById('currentWeather').innerHTML = currentWeatherHTML;

        // Fetch 3-day forecast
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`)
            .then(forecastResponse => forecastResponse.json())
            .then(forecastData => {
                let forecastHTML = '';
                for (let i = 0; i < 3; i++) {
                    const forecastTemp = Math.round(forecastData.list[i].main.temp);
                    const forecastDay = new Date(forecastData.list[i].dt_txt).toLocaleDateString(undefined, { weekday: 'long' });
                    forecastHTML += `<p>${forecastDay}: ${forecastTemp}°C</p>`;
                }
                document.getElementById('forecast').innerHTML = forecastHTML;
            });
    })
    .catch(error => console.log('Error fetching weather data:', error));
