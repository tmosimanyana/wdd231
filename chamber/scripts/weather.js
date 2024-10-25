// Replaced 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
const city = 'molepolole'; // Change this to my desired location

// Function to fetch weather data
async function fetchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`Weather data could not be fetched: ${response.statusText}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    }
}

// Function to display weather data
function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const location = data.name;
    const temperature = Math.round(data.main.temp); // Current temperature
    const description = data.weather[0].description; // Weather description

    // Constructing the HTML to display weather information
    weatherInfo.innerHTML = `
        <h3>Current Weather in ${location}</h3>
        <p>${temperature}°C - ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <h4>3-Day Forecast</h4>
        <ul id="forecastList"></ul>
    `;

    fetchForecast(); // Fetch the forecast after displaying current weather
}

// Function to fetch and display the 3-day forecast
async function fetchForecast() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Forecast data could not be fetched: ${response.statusText}`);
        }

        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Function to display the 3-day forecast
function displayForecast(data) {
    const forecastList = document.getElementById('forecastList');
    const uniqueDays = {};

    // Filter and group data for 3-day forecast
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString(); // Convert timestamp to local date
        if (!uniqueDays[date]) {
            uniqueDays[date] = { temp: Math.round(item.main.temp), description: item.weather[0].description };
        }
    });

    // Only take the first 3 unique days
    const days = Object.keys(uniqueDays).slice(0, 3);
    days.forEach(day => {
        const { temp, description } = uniqueDays[day];
        const listItem = document.createElement('li');
        listItem.innerHTML = `${day}: ${temp}°C - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        forecastList.appendChild(listItem);
    });
}

// Initialize the weather data fetch
fetchWeather();
