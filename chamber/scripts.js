document.addEventListener('DOMContentLoaded', function () {
    // Weather Section
    const weatherApiKey = 'YOUR_API_KEY';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Molepolole,BW&units=metric&appid=${weatherApiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <p>Temperature: ${data.main.temp.toFixed(0)}°C</p>
                <p>Description: ${capitalizeFirstLetter(data.weather[0].description)}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Business Spotlights
    fetch('spotlights.json')
        .then(response => response.json())
        .then(data => {
            const spotlights = document.getElementById('spotlights');
            data.spotlights.forEach(spotlight => {
                const spotlightDiv = document.createElement('div');
                spotlightDiv.innerHTML = `
                    <h3>${spotlight.name}</h3>
                    <p>${spotlight.description}</p>
                `;
                spotlights.appendChild(spotlightDiv);
            });
        })
        .catch(error => console.error('Error loading business spotlights:', error));

    // Utility function to capitalize the first letter of each word
    function capitalizeFirstLetter(string) {
        return string.replace(/\b\w/g, char => char.toUpperCase());
    }
});

