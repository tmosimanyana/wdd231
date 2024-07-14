document.addEventListener('DOMContentLoaded', () => {
    // Set current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set last modified date in the footer
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    // Function to fetch and display spotlight companies
    function loadSpotlightCompanies() {
        fetch('members.json')
            .then(response => response.json())
            .then(data => {
                // Filter for Silver and Gold level members
                const qualifiedMembers = data.filter(member =>
                    member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
                );

                // Shuffle and select 2 or 3 members randomly
                const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random());
                const selectedMembers = shuffledMembers.slice(0, 3);

                // Display selected members
                const spotlightContainer = document.getElementById('spotlight-companies');
                spotlightContainer.innerHTML = ''; // Clear previous content
                
                selectedMembers.forEach(member => {
                    const memberItem = document.createElement('div');
                    memberItem.classList.add('spotlight-item');

                    memberItem.innerHTML = `
                        <img src="${member.logo}" alt="${member.name} Logo" class="spotlight-logo">
                        <h3>${member.name}</h3>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    `;

                    spotlightContainer.appendChild(memberItem);
                });
            })
            .catch(error => console.error('Error loading member data:', error));
    }

    loadSpotlightCompanies();
});

