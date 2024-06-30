document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display members
    const businessDirectory = document.querySelector('.business-directory');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const toggleViewButton = document.getElementById('toggle-view');

    let members = [];
    let isGridView = true;

    const fetchMembers = async () => {
        try {
            const response = await fetch('data/members.json');
            members = await response.json();
            displayMembers();
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    const displayMembers = () => {
        businessDirectory.innerHTML = '';
        const filteredMembers = members.filter(member => {
            const matchesSearch = member.name.toLowerCase().includes(searchInput.value.toLowerCase());
            const matchesFilter = filterSelect.value === 'all' || member.membershipLevel === parseInt(filterSelect.value);
            return matchesSearch && matchesFilter;
        });

        filteredMembers.forEach(member => {
            const businessCard = document.createElement('div');
            businessCard.classList.add('business-card');

            const businessName = document.createElement('h3');
            businessName.textContent = member.name;

            const businessTagline = document.createElement('p');
            businessTagline.textContent = member.tagline;

            const businessEmail = document.createElement('p');
            businessEmail.textContent = `EMAIL: ${member.email}`;

            const businessPhone = document.createElement('p');
            businessPhone.textContent = `PHONE: ${member.phone}`;

            const businessUrl = document.createElement('p');
            businessUrl.textContent = `URL: ${member.url}`;

            businessCard.appendChild(businessName);
            businessCard.appendChild(businessTagline);
            businessCard.appendChild(businessEmail);
            businessCard.appendChild(businessPhone);
            businessCard.appendChild(businessUrl);

            businessDirectory.appendChild(businessCard);
        });

        if (isGridView) {
            businessDirectory.classList.add('grid-view');
            businessDirectory.classList.remove('list-view');
        } else {
            businessDirectory.classList.add('list-view');
            businessDirectory.classList.remove('grid-view');
        }
    };

    searchInput.addEventListener('input', displayMembers);
    filterSelect.addEventListener('change', displayMembers);
    toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView;
        displayMembers();
    });

    fetchMembers();

    // Display current year and last modification date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});




