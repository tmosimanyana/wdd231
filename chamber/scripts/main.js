// main.js
export async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

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
            <p><a href="#" class="website-link" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
        `;

        // If you have specific links for members, you can adjust the `href` in the website link accordingly
        memberCard.querySelector('.website-link').setAttribute('href', member.website || '#'); // Placeholder if no website is provided

        memberCard.addEventListener('click', () => {
            // Display modal with more information
            alert(`More info about ${member.name}`);
        });

        container.appendChild(memberCard);
    });
}
