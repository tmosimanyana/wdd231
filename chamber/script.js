document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const cityId = '933773'; // Gaborone city ID

    // Fetch current weather data
    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            document.getElementById('current-temp').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('current-desc').textContent = `Description: ${data.weather[0].description}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    // Fetch 3-day weather forecast data
    async function fetchForecast() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            document.getElementById('forecast-day-1').textContent = `Day 1: ${data.list[0].main.temp}°C`;
            document.getElementById('forecast-day-2').textContent = `Day 2: ${data.list[8].main.temp}°C`;
            document.getElementById('forecast-day-3').textContent = `Day 3: ${data.list[16].main.temp}°C`;
        } catch (error) {
            console.error('Error fetching forecast data:', error);
        }
    }

    // Fetch weather data on load
    fetchWeather();
    fetchForecast();

    // Fetch member data and display spotlight
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();
            const spotlightContainer = document.getElementById('spotlight-container');

            const silverGoldMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
            const shuffledMembers = silverGoldMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

            shuffledMembers.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('business-card');
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.names} Logo">
                    <p>${member.names}</p>
                    <p>${member.addresses}</p>
                    <p>Phone: ${member.phone_numbers}</p>
                    <p>URL: <a href="${member.website_urls}" target="_blank">${member.website_urls}</a></p>
                    <p>Membership Level: ${member.membership_level === 2 ? 'Silver' : 'Gold'}</p>
                `;
                spotlightContainer.appendChild(memberCard);
            });
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Fetch members on load
    fetchMembers();
});
