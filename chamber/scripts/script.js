document.addEventListener('DOMContentLoaded', () => {
    // Update current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();

    // Load spotlight data
    getSpotlightData();

    // Load weather data
    getWeatherData();
});

async function getSpotlightData() {
    try {
        const response = await fetch('data/members.json'); // Update with the correct path to your JSON data
        const data = await response.json();

        // Debugging - check the data structure
        console.log('Spotlight Data:', data);

        const filteredMembers = data.filter(member => member.membership_level === 1 || member.membership_level === 2);
        const selectedMembers = [];
        while (selectedMembers.length < 3 && filteredMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
        }

        const spotlightsContainer = document.getElementById('spotlights');
        spotlightsContainer.innerHTML = ''; // Clear any existing content

        selectedMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight-card');

            const img = document.createElement('img');
            img.src = `images/${member.image}`;
            img.alt = `Logo of ${member.name}`;
            img.setAttribute('loading', 'lazy');

            const details = document.createElement('div');
            details.classList.add('spotlight-details');

            const name = document.createElement('h3');
            name.textContent = member.name;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;

            const address = document.createElement('p');
            address.textContent = `Address: ${member.address}`;

            const website = document.createElement('a');
            website.href = member.website;
            website.textContent = 'Visit Website';
            website.setAttribute('target', '_blank');

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.description}`;

            details.appendChild(name);
            details.appendChild(phone);
            details.appendChild(address);
            details.appendChild(website);
            details.appendChild(membershipLevel);

            card.appendChild(img);
            card.appendChild(details);

            spotlightsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
}

async function getWeatherData() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replace with your API key
    const city = 'Gaborone'; // Replace with your city
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check the data structure
        console.log('Weather Data:', data);

        const currentWeather = data.list[0];
        const temperature = Math.round(currentWeather.main.temp);
        const description = currentWeather.weather.map(weather => weather.description).join(', ').toUpperCase();

        document.getElementById('currentTemperature').textContent = `Current Temperature: ${temperature}°C`;
        document.getElementById('currentWeather').textContent = `Current Weather: ${description}`;

        const forecastContainer = document.getElementById('forecast');
        forecastContainer.innerHTML = '';

        for (let i = 1; i <= 3; i++) {
            const weather = data.list[i * 8];
            const forecastTemperature = Math.round(weather.main.temp);
            const forecastDescription = weather.weather.map(w => w.description).join(', ').toUpperCase();

            const forecastItem = document.createElement('div');
            forecastItem.innerHTML = `
                <h3>Day ${i}</h3>
                <p>Temperature: ${forecastTemperature}°C</p>
                <p>Weather: ${forecastDescription}</p>
            `;
            forecastContainer.appendChild(forecastItem);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
