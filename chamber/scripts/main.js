// scripts/main.js

// Function to fetch member data from JSON
async function fetchMemberData() {
  try {
      const response = await fetch('chamber/data/members.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const members = await response.json();
      displayMembers(members);
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}

// Function to display members in a grid or list
function displayMembers(members) {
  const memberContainer = document.getElementById('member-container');
  memberContainer.innerHTML = '';

  members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'membership-card';
      memberCard.innerHTML = `
          <img src="${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
          <button class="modal-button" data-modal="modal-${member.id}">View Benefits</button>
      `;
      memberContainer.appendChild(memberCard);

      // Create modal for each member
      const modal = document.createElement('div');
      modal.id = `modal-${member.id}`;
      modal.className = 'modal';
      modal.innerHTML = `
          <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Benefits for ${member.name}</h2>
              <p>${member.benefits}</p>
          </div>
      `;
      document.body.appendChild(modal);
  });
}

// Set hidden timestamp field
function setTimestamp() {
  const timestampInput = document.getElementById('timestamp');
  if (timestampInput) {
      timestampInput.value = new Date().toISOString();
  }
}

// Modal functionality
function setupModals() {
  const modals = document.querySelectorAll('.modal');
  const modalButtons = document.querySelectorAll('.modal-button');
  const closeButtons = document.querySelectorAll('.close');

  modalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal');
          document.getElementById(modalId).style.display = "block";
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.closest('.modal').style.display = "none";
      });
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = "none";
      }
  });
}

// Toggle between grid and list display
function setupToggleView() {
  const toggleButton = document.getElementById('toggle-view');
  const memberContainer = document.getElementById('member-container');

  toggleButton.addEventListener('click', () => {
      memberContainer.classList.toggle('grid-view');
      memberContainer.classList.toggle('list-view');
  });
}

// Initialize the script
document.addEventListener('DOMContentLoaded', () => {
  setTimestamp(); // Set the hidden timestamp when the page loads

  // Check which page is being loaded and call appropriate functions
  if (document.getElementById('member-container')) {
      fetchMemberData(); // Only call fetch if on the directory page
      setupToggleView(); // Set up toggle view functionality
  }

  setupModals(); // Set up modals for all pages
});
