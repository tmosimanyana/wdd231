document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    loadSpotlights();
});

function fetchWeatherData() {
    const apiKey = 'your_openweathermap_api_key';
    const cityId = 'your_city_id'; // Gaborone city ID
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const description = capitalizeWords(data.weather.map(w => w.description).join(', '));

            document.getElementById('current-temp').textContent = temp;
            document.getElementById('weather-description').textContent = description;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastList = document.getElementById('forecast-list');
            forecastList.innerHTML = '';

            for (let i = 0; i < 3; i++) {
                const forecast = data.list[i * 8]; // get forecast for the same time each day
                const temp = Math.round(forecast.main.temp);
                const description = capitalizeWords(forecast.weather.map(w => w.description).join(', '));
                const date = new Date(forecast.dt_txt);

                const li = document.createElement('li');
                li.textContent = `${date.toDateString()}: ${temp}°C, ${description}`;
                forecastList.appendChild(li);
            }
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function loadSpotlights() {
    const membersUrl = 'members.json'; // Your JSON data source
    fetch(membersUrl)
        .then(response => response.json())
        .then(data => {
            const goldSilverMembers = data.members.filter(member => ['Gold', 'Silver'].includes(member.membershipLevel));
            const selectedMembers = getRandomElements(goldSilverMembers, 3);

            const spotlightContainer = document.getElementById('spotlight-container');
            spotlightContainer.innerHTML = '';

            selectedMembers.forEach(member => {
                const div = document.createElement('div');
                div.className = 'spotlight';

                const logo = document.createElement('img');
                logo.src = member.logo;
                logo.alt = `${member.name} logo`;
                div.appendChild(logo);

                const name = document.createElement('h4');
                name.textContent = member.name;
                div.appendChild(name);

                const phone = document.createElement('p');
                phone.textContent = `Phone: ${member.phone}`;
                div.appendChild(phone);

                const address = document.createElement('p');
                address.textContent = `Address: ${member.address}`;
                div.appendChild(address);

                const website = document.createElement('p');
                const link = document.createElement('a');
                link.href = member.website;
                link.textContent = member.website;
                website.appendChild(link);
                div.appendChild(website);

                const membershipLevel = document.createElement('p');
                membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
                div.appendChild(membershipLevel);

                spotlightContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
}

function getRandomElements(arr, count) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp, index;

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }

    return shuffled.slice(min);
}
