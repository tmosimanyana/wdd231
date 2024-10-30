document.addEventListener("DOMContentLoaded", () => {
  loadSpotlightMembers();
  loadWeather();
});

function loadSpotlightMembers() {
  const spotlightContainer = document.querySelector(".business-spotlight");

  fetch("members.json")
      .then(response => response.json())
      .then(data => {
          data.forEach(member => {
              const memberCard = document.createElement("div");
              memberCard.classList.add("business-card");

              memberCard.innerHTML = `
                  <h3>${member.name}</h3>
                  <p>${member.tagline}</p>
                  <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                  <p>Phone: ${member.phone}</p>
                  <p>URL: <a href="${member.url}" target="_blank">${member.url}</a></p>
              `;

              spotlightContainer.appendChild(memberCard);
          });
      })
      .catch(error => console.error("Error loading members:", error));
}

function loadWeather() {
  const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
  const weatherContainer = document.getElementById("weather-info");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kweneng,BW&units=imperial&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          const temp = data.main.temp;
          const weatherDescription = data.weather[0].description;
          weatherContainer.innerHTML = `Temperature: ${temp}°F <br> Conditions: ${weatherDescription}`;
      })
      .catch(error => console.error("Error loading weather:", error));
}
