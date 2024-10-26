// main.js

// Fetch and display weather data (for Home page)
function fetchWeather() {
    const apiKey = 'your_openweather_api_key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kweneng&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherContainer = document.getElementById('weatherContainer');
        weatherContainer.innerHTML = `
          <p><strong>${data.name}</strong></p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>${data.weather[0].description}</p>
        `;
      })
      .catch(error => console.error('Weather fetch error:', error));
  }
  
  // Load and display spotlight members (for Home page)
  function loadSpotlightMembers() {
    fetch('chamber/data/members.json')
      .then(response => response.json())
      .then(data => {
        const spotlightContainer = document.getElementById('spotlightContainer');
        const spotlightMembers = data.members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
  
        spotlightMembers.slice(0, 3).forEach(member => {
          const memberCard = document.createElement('div');
          memberCard.classList.add('spotlight-card');
          memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.category}</p>
            <a href="${member.website}" target="_blank">Learn More</a>
          `;
          spotlightContainer.appendChild(memberCard);
        });
      })
      .catch(error => console.error('Spotlight load error:', error));
  }
  
  // Load events from JSON data (for Discover page)
  function loadEvents() {
    fetch('chamber/data/events.json')
      .then(response => response.json())
      .then(data => {
        const eventsContainer = document.getElementById('eventsContainer');
        data.events.forEach(event => {
          const eventCard = document.createElement('div');
          eventCard.classList.add('event-card');
          eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
          `;
          eventsContainer.appendChild(eventCard);
        });
      })
      .catch(error => console.error('Events load error:', error));
  }
  
  // Form validation (for Join page)
  function validateForm() {
    const form = document.getElementById('membershipForm');
    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const membershipLevel = document.getElementById('membershipLevel').value;
  
      if (!name || !email || !phone || !membershipLevel) {
        alert("All fields are required.");
        e.preventDefault();
      }
    });
  }
  
  // Event Listeners for Page-Specific Functions
  document.addEventListener('DOMContentLoaded', () => {
    // Conditional checks to run functions based on the page content
    if (document.getElementById('weatherContainer')) fetchWeather();
    if (document.getElementById('spotlightContainer')) loadSpotlightMembers();
    if (document.getElementById('eventsContainer')) loadEvents();
    if (document.getElementById('membershipForm')) validateForm();
  });
  