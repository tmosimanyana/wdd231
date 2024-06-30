document.addEventListener('DOMContentLoaded', () => {
    // Example weather data
    const weatherData = {
        current: {
            temperature: 75,
            condition: 'Partly Cloudy',
            high: 85,
            low: 52,
            humidity: 34,
            sunrise: '7:30am',
            sunset: '9:59pm'
        },
        forecast: [
            { day: 'Today', temperature: 90 },
            { day: 'Wednesday', temperature: 89 },
            { day: 'Thursday', temperature: 68 }
        ]
    };

    // Update the current weather section
    const currentWeatherTemp = document.querySelector('.current-weather p:nth-of-type(1)');
    const currentWeatherCondition = document.querySelector('.current-weather p:nth-of-type(2)');
    const currentWeatherHigh = document.querySelector('.current-weather p:nth-of-type(3)');
    const currentWeatherLow = document.querySelector('.current-weather p:nth-of-type(4)');
    const currentWeatherHumidity = document.querySelector('.current-weather p:nth-of-type(5)');
    const currentWeatherSunrise = document.querySelector('.current-weather p:nth-of-type(6)');
    const currentWeatherSunset = document.querySelector('.current-weather p:nth-of-type(7)');

    currentWeatherTemp.textContent = `${weatherData.current.temperature}°F`;
    currentWeatherCondition.textContent = weatherData.current.condition;
    currentWeatherHigh.textContent = `High: ${weatherData.current.high}°F`;
    currentWeatherLow.textContent = `Low: ${weatherData.current.low}°F`;
    currentWeatherHumidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
    currentWeatherSunrise.textContent = `Sunrise: ${weatherData.current.sunrise}`;
    currentWeatherSunset.textContent = `Sunset: ${weatherData.current.sunset}`;

    // Update the weather forecast section
    const weatherForecast = document.querySelector('.weather-forecast');
    weatherData.forecast.forEach(day => {
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `${day.day}: ${day.temperature}°F`;
        weatherForecast.appendChild(forecastItem);
    });

    // Example business data
    const businessData = [
        { name: 'Business Name 1', tagline: 'Business Tag Line 1', email: 'info@gmail.com', phone: '800-555-1234', url: 'http://mybusiness.com' },
        { name: 'Business Name 2', tagline: 'Business Tag Line 2', email: 'info@gmail.com', phone: '800-555-1234', url: 'http://mybusiness.com' },
        { name: 'Business Name 3', tagline: 'Business Tag Line 3', email: 'info@gmail.com', phone: '800-555-1234', url: 'http://mybusiness.com' }
    ];

    // Update the business directory section
    const businessDirectory = document.querySelector('.business-directory');
    businessData.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.classList.add('business-card');

        const businessName = document.createElement('h3');
        businessName.textContent = business.name;

        const businessTagline = document.createElement('p');
        businessTagline.textContent = business.tagline;

        const businessEmail = document.createElement('p');
        businessEmail.textContent = `EMAIL: ${business.email}`;

        const businessPhone = document.createElement('p');
        businessPhone.textContent = `PHONE: ${business.phone}`;

        const businessUrl = document.createElement('p');
        businessUrl.innerHTML = `URL: <a href="${business.url}" target="_blank">${business.url}</a>`;

        businessCard.appendChild(businessName);
        businessCard.appendChild(businessTagline);
        businessCard.appendChild(businessEmail);
        businessCard.appendChild(businessPhone);
        businessCard.appendChild(businessUrl);

        businessDirectory.appendChild(businessCard);
    });
});
