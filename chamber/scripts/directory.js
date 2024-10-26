// Fetch and display member data
async function fetchMembers() {
  try {
      const response = await fetch('data/members.json'); // Adjust path as needed
      if (!response.ok) throw new Error('Network response was not ok');
      const members = await response.json();
      displayMembers(members);
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}

// Display member information
function displayMembers(members) {
  const memberContainer = document.getElementById('member-container');
  memberContainer.innerHTML = ''; // Clear previous content

  members.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'member-card';
      memberCard.innerHTML = `
          <img src="${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p>${member.membershipLevel}</p>
      `;
      memberContainer.appendChild(memberCard);
  });
}

// Toggle between grid and list view
document.getElementById('toggle-view').addEventListener('click', () => {
  const memberContainer = document.getElementById('member-container');
  memberContainer.classList.toggle('grid-view');
  memberContainer.classList.toggle('list-view');
  updateListItems();
});

// Update the footer with the current year and last modified date
function updateFooter() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  const lastModified = new Date(document.lastModified);
  document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();
}

// Update list item styles when toggling views
function updateListItems() {
  const memberContainer = document.getElementById('member-container');

  if (memberContainer.classList.contains('list-view')) {
      const listItems = memberContainer.querySelectorAll('.member-card');
      listItems.forEach(item => {
          item.className = 'list-item'; // Change class for list view
      });
  } else {
      const listItems = memberContainer.querySelectorAll('.list-item');
      listItems.forEach(item => {
          item.className = 'member-card'; // Change back to card view
      });
  }
}

// Initialize the page
fetchMembers();
updateFooter();
