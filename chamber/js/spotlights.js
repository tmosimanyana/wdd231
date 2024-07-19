document.addEventListener('DOMContentLoaded', () => {
    fetch('path/to/your/members.json')
        .then(response => response.json())
        .then(data => {
            const spotlights = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
            const randomSpotlights = spotlights.sort(() => 0.5 - Math.random()).slice(0, 3);
            const spotlightContainer = document.getElementById('spotlight-container');

            randomSpotlights.forEach(member => {
                spotlightContainer.innerHTML += `
                    <div class="spotlight">
                        <img src="${member.logo}" alt="${member.companyName} Logo">
                        <h3>${member.companyName}</h3>
                        <p>Phone: ${member.phone}</p>
                        <p>Address: ${member.address}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p>Membership Level: ${member.membershipLevel}</p>
                    </div>
                `;
            });
        });
});
