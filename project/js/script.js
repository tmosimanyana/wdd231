// OpenWeatherMap API key and URL
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // replace with your OpenWeatherMap API key
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Gaborone,BW&units=metric&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const temp = Math.round(data.main.temp);
            const weatherDesc = data.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ');
            document.querySelector('#weather-details').innerHTML = `
                <p>Temperature: ${temp}°C</p>
                <p>Weather: ${weatherDesc}</p>
                <p>Three-Day Forecast:</p>
                <ul id="forecast"></ul>
            `;

            // Fetch 3-day forecast
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            const forecastData = await forecastResponse.json();
            const forecastList = document.querySelector('#forecast');
            for (let i = 0; i < 3; i++) {
                const day = forecastData.list[i * 8];
                forecastList.innerHTML += `<li>${new Date(day.dt * 1000).toDateString()}: ${Math.round(day.main.temp)}°C, ${day.weather.map(w => w.description.charAt(0).toUpperCase() + w.description.slice(1)).join(', ')}</li>`;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    fetchWeather();

    // Fetch Member Spotlights
    async function fetchSpotlights() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error('Invalid data format');
            }

            const spotlightContainer = document.getElementById('spotlight-container');
            const goldOrSilverMembers = data.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
            const randomSpotlights = goldOrSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

            if (randomSpotlights.length === 0) {
                spotlightContainer.innerHTML = '<p>No members to display.</p>';
                return;
            }

            randomSpotlights.forEach(member => {
                spotlightContainer.innerHTML += `
                    <div class="spotlight-card">
                        <img src="${member.logo}" alt="${member.companyName} Logo" loading="lazy">
                        <h3>${member.companyName}</h3>
                        <p>Phone: ${member.phone}</p>
                        <p>Address: ${member.address}</p>
                        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p>Membership Level: ${member.membershipLevel}</p>
                    </div>
                `;
            });
        } catch (error) {
            console.error('Error fetching member spotlights:', error);
            document.getElementById('spotlight-container').innerHTML = '<p>Error loading member spotlights.</p>';
        }
    }

    fetchSpotlights();
</script>