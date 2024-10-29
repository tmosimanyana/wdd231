document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_API_KEY";
    const location = "Molepolole";
  
    async function getWeatherData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      
      displayCurrentWeather(data);
      getForecastData();
    }
  
    async function getForecastData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`);
      const forecastData = await response.json();
  
      displayForecast(forecastData);
    }
  
    function displayCurrentWeather(data) {
      document.getElementById("temp").innerText = `${data.main.temp}°C`;
      document.getElementById("description").innerText = capitalize(data.weather[0].description);
    }
  
    function displayForecast(data) {
      const forecastElements = document.querySelectorAll(".forecast-day");
      for (let i = 0; i < 3; i++) {
        forecastElements[i].innerText = `${data.list[i * 8].main.temp}°C`;
      }
    }
  
    function capitalize(description) {
      return description.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
  
    getWeatherData();
  });
  