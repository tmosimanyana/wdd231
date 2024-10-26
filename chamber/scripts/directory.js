// scripts/directory.js

const memberContainer = document.getElementById('member-container');
const modal = document.createElement('div'); // Create modal
modal.classList.add('modal');
document.body.appendChild(modal);

const closeModal = document.createElement('span');
closeModal.classList.add('close');
closeModal.textContent = '×';
modal.appendChild(closeModal);

const modalTitle = document.createElement('h3');
modal.appendChild(modalTitle);

const modalDetails = document.createElement('p');
modal.appendChild(modalDetails);

// Function to render members
export function renderMembers(members) {
    memberContainer.innerHTML = ''; // Clear existing members
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <button class="view-details" data-name="${member.name}" data-info="${member.phone}, ${member.membershipLevel}">View Details</button>
        `;
        memberContainer.appendChild(memberCard);

        // Add event listener for the modal
        const viewDetailsButton = memberCard.querySelector('.view-details');
        viewDetailsButton.addEventListener('click', () => {
            showModal(member.name, `Phone: ${member.phone}<br>Membership Level: ${member.membershipLevel}`);
        });
    });
}

// Function to toggle between list and grid view
export function toggleView() {
    memberContainer.classList.toggle('grid-view');
    memberContainer.classList.toggle('list-view');
    const currentView = memberContainer.classList.contains('grid-view') ? 'grid' : 'list';
    document.getElementById('toggle-view').textContent = currentView === 'grid' ? 'Switch to List View' : 'Switch to Grid View';

    // Store user preference in localStorage
    localStorage.setItem('viewMode', currentView);
}

// Function to show modal with member details
export function showModal(name, info) {
    modal.style.display = 'block';
    modalTitle.textContent = name;
    modalDetails.innerHTML = info;

    // Close modal when clicking on <span> (x)
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Initialize view mode from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const storedViewMode = localStorage.getItem('viewMode');
    if (storedViewMode) {
        memberContainer.classList.toggle(storedViewMode === 'grid' ? 'grid-view' : 'list-view');
        document.getElementById('toggle-view').textContent = storedViewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View';
    }
});
