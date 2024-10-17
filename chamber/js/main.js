document.addEventListener('DOMContentLoaded', function () {
    // Update current year in footer
    const year = new Date().getFullYear();
    document.getElementById('currentYear').innerText = year;
    document.getElementById('last-modified').innerText = new Date(document.lastModified).toLocaleString();

    // Fetch Weather Data
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // Replaced with my OpenWeatherMap API key
    const city = 'Molepolole,BW';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('currentTemp').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weatherDesc').innerText = `Description: ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Example JSON Data for Company Spotlight
    const members = [
        { name: 'Member One', membership: 'Gold', description: 'A leading agricultural firm.' },
        { name: 'Member Two', membership: 'Silver', description: 'Specializing in crop production.' },
        { name: 'Member Three', membership: 'Gold', description: 'Experts in organic farming.' },
    ];

    // Filter and display gold/silver members randomly
    const spotlightMembers = members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
    const selectedMembers = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const membersContainer = document.getElementById('membersContainer');
    selectedMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `<h3>${member.name}</h3><p>${member.description}</p>`;
        membersContainer.appendChild(memberDiv);
    });
});
