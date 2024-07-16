const spotlightContainer = document.getElementById('spotlight-container');

fetch('chamber-members.json')
    .then(response => response.json())
    .then(data => {
        const goldAndSilverMembers = data.filter(member => 
            member.membership_level === 'Gold' || member.membership_level === 'Silver'
        );

        const randomMembers = getRandomElements(goldAndSilverMembers, 2);

        randomMembers.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('spotlight-member');

            memberDiv.innerHTML = `
                <img src="${member.logo}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership Level: ${member.membership_level}</p>
            `;

            spotlightContainer.appendChild(memberDiv);
        });
    })
    .catch(error => {
        spotlightContainer.innerHTML = `<p>Failed to load company spotlights.</p>`;
        console.error('Error fetching company spotlights:', error);
    });

function getRandomElements(arr, n) {
    const result = [];
    const taken = new Array(arr.length);

    if (n > arr.length) return arr;

    while (n--) {
        const x = Math.floor(Math.random() * arr.length);
        result.push(arr[x in taken ? taken[x] : x]);
        taken[x] = --arr.length in taken ? taken[arr.length] : arr.length;
    }

    return result;
}
