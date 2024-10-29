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

// Call the function to populate the directory when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateDirectory);
