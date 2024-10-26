// directory.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleViewButton = document.getElementById("toggle-view");
  const memberContainer = document.getElementById("member-container");

  // Toggle view functionality
  toggleViewButton.addEventListener("click", function () {
      memberContainer.classList.toggle("grid-view");
      memberContainer.classList.toggle("list-view");
      
      if (memberContainer.classList.contains("grid-view")) {
          toggleViewButton.textContent = "Switch to List View";
      } else {
          toggleViewButton.textContent = "Switch to Grid View";
      }
  });

  // Display the current year in the footer
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  // Display the last modified date in the footer
  const lastModifiedElement = document.getElementById("last-modified");
  const lastModifiedDate = new Date(document.lastModified);
  lastModifiedElement.textContent = lastModifiedDate.toLocaleString();

  // Fetch and display members
  fetch('data/members.json')
      .then(response => response.json())
      .then(members => {
          members.forEach(member => {
              const memberCard = document.createElement("div");
              memberCard.classList.add("member-card");

              memberCard.innerHTML = `
                  <h3>${member.name}</h3>
                  <p><strong>Position:</strong> ${member.position}</p>
                  <p><strong>Company:</strong> ${member.company}</p>
                  <p><strong>Contact:</strong> ${member.contact}</p>
                  <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
              `;

              memberContainer.appendChild(memberCard);
          });
      })
      .catch(error => console.error("Error loading member data:", error));
});
