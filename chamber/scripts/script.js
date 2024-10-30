document.addEventListener("DOMContentLoaded", () => {
    fetchMembers();
});

async function fetchMembers() {
    try {
        const response = await fetch("data/members.json"); // Make sure this path points to the correct location
        const members = await response.json();

        const spotlightContainer = document.getElementById("businessSpotlightContent");
        spotlightContainer.innerHTML = ""; // Clear any existing content

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            `;

            spotlightContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData();
});

async function fetchWeatherData() {
    const apiKey = "5c7e429e1b20f30b60de00a18bcc0e92";
    const location = "Molepolole, BW"; // Replace with the location of interest
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            console.error("Error fetching weather data:", data.message);
            return;
        }

        // Parse the necessary weather data
        const temperature = Math.round(data.main.temp);
        const high = Math.round(data.main.temp_max);
        const low = Math.round(data.main.temp_min);
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Populate HTML elements with weather data
        document.getElementById("currentWeather").textContent = `${temperature}°F - ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        document.getElementById("weatherHigh").textContent = `High: ${high}°F`;
        document.getElementById("weatherLow").textContent = `Low: ${low}°F`;
        document.getElementById("weatherHumidity").textContent = `Humidity: ${humidity}%`;
        document.getElementById("weatherSunrise").textContent = `Sunrise: ${sunrise}`;
        document.getElementById("weatherSunset").textContent = `Sunset: ${sunset}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
