async function fetchWeather() {
    const apiKey = 'your_openweathermap_api_key'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Molepolole,BW&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const weatherData = await response.json();

    // Extract required weather information
    const currentWeather = weatherData.list[0];
    const temp = currentWeather.main.temp.toFixed(0);
    const description = currentWeather.weather.map(item => item.description).join(', ').replace(/\b\w/g, char => char.toUpperCase());

    document.getElementById('weather-details').innerHTML = `
        <p>Current Temperature: ${temp}°C</p>
        <p>Weather: ${description}</p>
    `;

    // Further, add a 3-day forecast logic here
}
fetchWeather();
