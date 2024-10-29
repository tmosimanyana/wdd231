// Function to populate the directory
async function populateDirectory() {
    const directoryContent = document.getElementById('directory-content');
    directoryContent.innerHTML = ''; // Clear existing content

    try {
        // Fetch the JSON data
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const directoryData = await response.json(); // Parse JSON data

        // Loop through the directory data and create entries
        directoryData.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.className = 'directory-entry';

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

// Combined DOMContentLoaded event to handle all functionalities at once
document.addEventListener('DOMContentLoaded', function () {
    populateDirectory(); // Call the function to populate the directory

    // Toggle between grid and list view
    const directoryContent = document.getElementById('directory-content');
    const viewToggle = document.createElement('button');
    viewToggle.textContent = 'Switch to List View';
    viewToggle.classList.add('view-toggle');
    directoryContent.insertAdjacentElement('beforebegin', viewToggle);

    viewToggle.addEventListener('click', () => {
        if (directoryContent.classList.toggle('list-view')) {
            viewToggle.textContent = 'Switch to Grid View';
        } else {
            viewToggle.textContent = 'Switch to List View';
        }
    });

    // Display current year and last modification date
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);
    const footer = document.querySelector('footer');

    // Update copyright year
    const copyrightYear = footer.querySelector('.social-media p');
    copyrightYear.innerHTML = `&copy; ${currentYear} Kweneng Agriculture Chamber of Commerce`;

    // Update last modification date
    const modifiedDate = footer.querySelector('.modified-date');
    modifiedDate.textContent = `WDD231 Class Project | Last Modified: ${lastModified.toLocaleDateString('en-GB')}`;
});
