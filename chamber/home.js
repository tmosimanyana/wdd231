// Display the current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Placeholder data for current events
const events = [
    { title: 'Annual Agricultural Fair', date: '2024-01-15' },
    { title: 'Harvest Festival', date: '2024-02-20' },
    { title: 'Spring Planting Workshop', date: '2024-03-10' }
];

// Populate current events
const eventList = document.getElementById('eventList');
events.forEach(event => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `<strong>${event.title}</strong><br><small>${event.date}</small>`;
    eventList.appendChild(div);
});

// Placeholder data for weather (static example, replace with API call as needed)
const weatherData = {
    location: 'Kwenengmolepolole',
    temperature: '28°C',
    description: 'Sunny',
    forecast: [
        { day: 'Mon', temp: '30°C' },
        { day: 'Tue', temp: '29°C' },
        { day: 'Wed', temp: '27°C' }
    ]
};

// Populate weather information
const weatherInfo = document.getElementById('weatherInfo');
weatherInfo.innerHTML = `
    <h3>Current Weather in ${weatherData.location}</h3>
    <p>${weatherData.temperature} - ${weatherData.description}</p>
    <h4>3-Day Forecast</h4>
    <ul>${weatherData.forecast.map(day => `<li>${day.day}: ${day.temp}</li>`).join('')}</ul>
`;

// Placeholder data for company spotlight
const members = [
    { name: "BAMB Headquarters", membershipLevel: "Gold", image: "images/bamb.webp" },
    { name: "AgriFeed GICP", membershipLevel: "Silver", image: "images/agrifeed.webp" },
    { name: "Greenhouse Technologies", membershipLevel: "Gold", image: "images/greenhouse.webp" }
];

// Filter and select members for spotlight
const companySpotlight = document.getElementById('companyList');
members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver")
       .forEach(member => {
           const div = document.createElement('div');
           div.className = 'company';
           div.innerHTML = `
               <img src="${member.image}" alt="${member.name}" class="responsive">
               <h3>${member.name}</h3>
               <p>Membership Level: ${member.membershipLevel}</p>`;
           companySpotlight.appendChild(div);
       });
