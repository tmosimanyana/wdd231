
// Weather Integration
async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kweneng&appid=5c7e429e1b20f30b60de00a18bcc0e92&units=metric');
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;

    document.getElementById('weather').innerHTML = `Current Temperature: ${temperature}°C, Weather: ${weatherDescription}`;
}

// Spotlight Members (Silver and Gold)
async function fetchSpotlightMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const spotlightContainer = document.querySelector('.spotlight');
    const spotlightMembers = members.filter(member => member.membershipLevel >= 2);

    spotlightMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}

// DOMContentLoaded event for initial scripts
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlightMembers();
});
