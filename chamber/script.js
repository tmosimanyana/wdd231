document.addEventListener("DOMContentLoaded", function() {
    // Set the timestamp when the page is loaded
    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    timestampField.value = now.toISOString();
  
    // Animate membership cards on page load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('loaded');
      }, index * 200); // Stagger animation for each card
    });
  });
  
  // Function to open modals
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
  
  // Function to close modals
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  };
  