// Select the div where we will display the business cards and the toggle button
const businessList = document.getElementById('business-list');
const toggleViewButton = document.getElementById('toggle-view');

// Function to fetch and display businesses using async/await
async function fetchAndDisplayBusinesses() {
    try {
        const response = await fetch('businesses.json');  // Change this to your JSON data source location
        const businesses = await response.json();
        displayBusinesses(businesses);
    } catch (error) {
        console.error('Error fetching businesses:', error);
    }
}

// Function to create and display business cards
function displayBusinesses(businesses) {
    businessList.innerHTML = '';  // Clear the list before populating
    businesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="images/${business.image}" alt="${business.name}">
            <h2>${business.name}</h2>
            <ul class="contact-info">
                <li>${business.address}</li>
                <li>Phone: ${business.phone}</li>
                <li><a href="${business.url}" target="_blank">Visit Website</a></li>
            </ul>
        `;
        businessList.appendChild(card);
    });
}

// Toggle between grid and list view
toggleViewButton.addEventListener('click', () => {
    if (businessList.classList.contains('grid-view')) {
        businessList.classList.remove('grid-view');
        businessList.classList.add('list-view');
        toggleViewButton.textContent = 'Switch to Grid View';
    } else {
        businessList.classList.remove('list-view');
        businessList.classList.add('grid-view');
        toggleViewButton.textContent = 'Switch to List View';
    }
});

// Display the copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Call the function to fetch and display businesses on page load
fetchAndDisplayBusinesses();
