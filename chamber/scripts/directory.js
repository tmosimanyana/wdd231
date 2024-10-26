// directory.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleViewButton = document.getElementById("toggle-view");
  const memberContainer = document.getElementById("member-container");

  toggleViewButton.addEventListener("click", function () {
      memberContainer.classList.toggle("grid-view");
      memberContainer.classList.toggle("list-view");
      
      // Optionally change the button text based on the current view
      if (memberContainer.classList.contains("grid-view")) {
          toggleViewButton.textContent = "Switch to List View";
      } else {
          toggleViewButton.textContent = "Switch to Grid View";
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Display the current year
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  // Display the last modified date
  const lastModifiedElement = document.getElementById("last-modified");
  const lastModifiedDate = new Date(document.lastModified);
  lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
});
