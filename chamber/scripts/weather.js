// scripts/weather.js
export async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const weatherElement = document.getElementById("currentWeather");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kweneng&appid=${apiKey}&units=imperial`);
        if (!response.ok) throw new Error("Weather data could not be retrieved");

        const data = await response.json();
        const currentTemp = `${Math.round(data.main.temp)}°F - ${data.weather[0].description}`;
        weatherElement.textContent = currentTemp;
    } catch (error) {
        weatherElement.textContent = "Unable to load weather data";
        console.error(error);
    }
}
