document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const spotlightContainer = document.getElementById('spotlight-container');
            const goldAndSilverMembers = data.filter(member => member.membershipLevel >= 2);

            const getRandomMembers = (array, num) => {
                const shuffled = array.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, num);
            };

            const spotlights = getRandomMembers(goldAndSilverMembers, 3);

            spotlights.forEach(member => {
                spotlightContainer.innerHTML += `
                    <div class="spotlight">
                        <img src="images/${member.image}" alt="${member.name} Logo">
                        <h3>${member.name}</h3>
                        <p>Phone: ${member.phone}</p>
                        <p>Address: ${member.address}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
});
