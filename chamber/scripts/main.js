// Example JSON Data for Events and Spotlights
const events = [
    {
      title: "Annual Farmers Meeting",
      date: "November 10, 2024",
      location: "Kweneng Community Center",
      description: "Join us to discuss the latest in agricultural developments and network with other local farmers."
    },
    // Add more events as needed
  ];
  
  const spotlights = [
    {
      name: "BAMB Headquarters",
      address: "123 BAMB Rd, Kweneng",
      phone: "+267 123 4567",
      membership: "Level 3",
      image: "images/bamb.webp"
    },
    {
      name: "AgriFeed GICP",
      address: "456 Agri Rd, Kweneng",
      phone: "+267 765 4321",
      membership: "Level 2",
      image: "images/agrifeed.webp"
    },
    {
      name: "Greenhouse Technologies",
      address: "789 Greenhouse Ave, Kweneng",
      phone: "+267 111 2222",
      membership: "Level 2",
      image: "images/greenhouse.webp"
    }
    // Add more businesses as needed
  ];
  
  // Function to load Events dynamically
  function loadEvents() {
    const eventsContainer = document.querySelector(".current-events");
    events.forEach(event => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.innerHTML = `
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>${event.description}</p>
      `;
      eventsContainer.appendChild(eventElement);
    });
  }
  
  // Function to load Spotlights dynamically
  function loadSpotlights() {
    const spotlightsContainer = document.querySelector(".spotlights-container");
    spotlights.forEach(business => {
      const businessElement = document.createElement("div");
      businessElement.classList.add("business-card");
      businessElement.innerHTML = `
        <img src="${business.image}" alt="${business.name}">
        <h3>${business.name}</h3>
        <p>Address: ${business.address}</p>
        <p>Phone: ${business.phone}</p>
        <p>Membership ${business.membership}</p>
      `;
      spotlightsContainer.appendChild(businessElement);
    });
  }
  
  // Initialize dynamic content on page load
  document.addEventListener("DOMContentLoaded", () => {
    loadEvents();
    loadSpotlights();
  });
  