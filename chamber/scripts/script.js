// Function to populate the directory
async function populateDirectory() {
    const directoryContent = document.getElementById('members-container');
    directoryContent.innerHTML = '<p>Loading directory...</p>'; // Loading indicator

    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const directoryData = await response.json();
        directoryContent.innerHTML = ''; // Clear loading message

        // Loop through the directory data and create entries
        directoryData.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'member-card';
            entryDiv.innerHTML = `
                <img src="${entry.image}" alt="${entry.name} Logo" class="business-logo" loading="lazy">
                <h3>${entry.name}</h3>
                <p>Address: ${entry.address}</p>
                <p>Phone: <a href="tel:${entry.phone.replace(/\s+/g, '')}">${entry.phone}</a></p>
                <p>Membership Level: ${entry.membershipLevel}</p>
            `;
            directoryContent.appendChild(entryDiv);
        });
    } catch (error) {
        console.error('Error fetching the directory data:', error);
        directoryContent.innerHTML = '<p>Sorry, we could not load the directory at this time.</p>';
    }
}

// Toggle between grid and list view
function setupViewToggle() {
    const viewToggleBtn = document.getElementById('view-toggle');
    const directoryContent = document.getElementById('members-container');

    viewToggleBtn.addEventListener('click', () => {
        directoryContent.classList.toggle('list-view');
        directoryContent.classList.toggle('grid-view');
        viewToggleBtn.textContent =
            directoryContent.classList.contains('list-view') ? 'Switch to Grid View' : 'Switch to List View';
    });
}

// Display current year and last modification date
function setupFooterDates() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    // Update copyright year
    const copyrightYear = document.querySelector('.social-media p');
    copyrightYear.innerHTML = `&copy; ${currentYear} Kweneng Agriculture Chamber of Commerce`;

    // Update last modification date
    const modifiedDate = document.querySelector('.modified-date');
    modifiedDate.textContent = `WDD231 Class Project | Last Modified: ${lastModified.toLocaleDateString('en-GB')}`;
}

// Weather Fetching Function
async function fetchWeather() {
    const weatherCard = document.querySelector('.weather-card');
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92'; // replace with your OpenWeather API key
    const lat = '-24.4062';
    const lon = '25.4951'; // Coordinates for Molepolole
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherCard.querySelector('.temperature').textContent = `${data.main.temp} °C`;
        weatherCard.querySelector('.conditions').textContent = data.weather[0].description;
        weatherCard.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherCard.innerHTML = '<p>Weather data not available at the moment.</p>';
    }
}

// Initialize functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
    populateDirectory();
    setupViewToggle();
    setupFooterDates();
    fetchWeather();
});
