document.addEventListener("DOMContentLoaded", function () {
    // Fetch Weather Data
    const fetchWeather = async () => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kasane,BW&appid=35177d3eff6951544664f3746d418ea5&units=metric');
        const data = await response.json();
        displayWeather(data);
    };

    const displayWeather = (data) => {
        const currentWeather = document.getElementById('currentWeather');
        const forecast = document.getElementById('forecast');

        const temperature = Math.round(data.main.temp);
        const description = capitalizeWords(data.weather.map(w => w.description).join(', '));
        const high = Math.round(data.main.temp_max);
        const low = Math.round(data.main.temp_min);

        currentWeather.innerHTML = `
            <p>${temperature}°C</p>
            <p>${description}</p>
            <p>High: ${high}°C, Low: ${low}°C</p>
        `;

        // Fetch Forecast Data (assuming you have an endpoint for this)
        fetchForecast();
    };

    const fetchForecast = async () => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Kasane,BW&appid=35177d3eff6951544664f3746d418ea5&units=metric');
        const data = await response.json();
        displayForecast(data);
    };

    const displayForecast = (data) => {
        const forecast = document.getElementById('forecast');
        let forecastHTML = '';
        
        data.list.slice(0, 3).forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            const temp = Math.round(item.main.temp);
            forecastHTML += `<p>${date}: ${temp}°C</p>`;
        });

        forecast.innerHTML += forecastHTML;
    };

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };

    // Fetch Spotlight Members
    const fetchSpotlightMembers = async () => {
        const response = await fetch('members.json');
        const members = await response.json();
        displaySpotlightMembers(members);
    };

    const displaySpotlightMembers = (members) => {
        const spotlightContainer = document.getElementById('spotlightMembers');
        const qualifiedMembers = members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
        
        const randomMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        randomMembers.forEach(member => {
            spotlightContainer.innerHTML += `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.companyName} Logo">
                    <h3>${member.companyName}</h3>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                </div>
            `;
        });
    };

    fetchWeather();
    fetchSpotlightMembers();
});
