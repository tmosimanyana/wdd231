document.addEventListener("DOMContentLoaded", async function () {
    const businessListElement = document.getElementById('business-list');
    const toggleButton = document.getElementById('toggle-view');
    
    // Check for cached data
    let businesses = JSON.parse(localStorage.getItem('businesses'));
    
    if (!businesses) {
        // Fetch data from JSON file if not in cache
        const response = await fetch('data/members.json');
        if (!response.ok) {
            console.error('Failed to fetch data:', response.statusText);
            return;
        }
        businesses = await response.json();
        
        // Cache data in localStorage
        localStorage.setItem('businesses', JSON.stringify(businesses));
    }

    displayBusinesses(businesses);

    toggleButton.addEventListener('click', () => {
        const currentView = businessListElement.dataset.view;
        const newView = currentView === 'grid' ? 'list' : 'grid';
        businessListElement.dataset.view = newView;
        displayBusinesses(businesses);
    });

    function displayBusinesses(businesses) {
        businessListElement.innerHTML = '';
        businesses.forEach(business => {
            const businessDiv = document.createElement('div');
            businessDiv.classList.add('business');
            businessDiv.innerHTML = `
                <h3>${business.name}</h3>
                <p>${business.description}</p>
                <p>Email: <a href="mailto:${business.email}">${business.email}</a></p>
                <p>Phone: ${business.phone}</p>
                <p><a href="${business.website}" target="_blank">Visit Website</a></p>
            `;
            if (businessListElement.dataset.view === 'grid') {
                businessDiv.classList.add('grid-item');
            } else {
                businessDiv.classList.add('list-item');
            }
            businessListElement.appendChild(businessDiv);
        });
    }
});
