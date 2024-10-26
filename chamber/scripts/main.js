export function renderMembers(members, container) {
    container.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;

        // Add event listener for opening the modal
        memberCard.addEventListener('click', () => {
            openModal(member);
        });

        container.appendChild(memberCard);
    });
}

function openModal(member) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAddress = document.getElementById('modal-address');
    const modalPhone = document.getElementById('modal-phone');
    const modalMembership = document.getElementById('modal-membership');
    const modalImage = document.getElementById('modal-image');

    // Set the modal content
    modalTitle.textContent = member.name;
    modalAddress.textContent = `Address: ${member.address}`;
    modalPhone.textContent = `Phone: ${member.phone}`;
    modalMembership.textContent = `Membership Level: ${member.membershipLevel}`;
    modalImage.src = member.image;

    // Display the modal
    modal.style.display = "block";

    // Close modal when clicking the close button
    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Close modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
