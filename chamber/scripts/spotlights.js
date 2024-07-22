document.addEventListener("DOMContentLoaded", function () {
    const spotlightsElement = document.getElementById('spotlights');

    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const goldSilverMembers = data.members.filter(member => member.level === 'gold' || member.level === 'silver');
            const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

            const spotlightHTML = selectedMembers.map(member => `
                <div class="member-spotlight">
                    <h3>${member.name}</h3>
                    <img src="${member.logo}" alt="${member.name} Logo" style="width: 100px;">
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p>Membership Level: ${member.level.charAt(0).toUpperCase() + member.level.slice(1)}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `).join('');

            spotlightsElement.innerHTML = spotlightHTML;
        })
        .catch(error => {
            console.error('Error fetching member data:', error);
            spotlightsElement.innerHTML = '<p>Spotlight data is unavailable at the moment.</p>';
        });
});
