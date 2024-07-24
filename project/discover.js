// discover.js

document.addEventListener('DOMContentLoaded', async () => {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Fetch Events Data (Assuming you have an API or JSON file for events)
    try {
        const response = await fetch('data/events.json');
        const events = await response.json();

        const eventsList = document.querySelector('.events ul');

        eventsList.innerHTML = events.map(event => `
            <li>
                <strong>${event.title}</strong>
                <p>${event.date}</p>
                <p>${event.description}</p>
            </li>
        `).join('');
    } catch (error) {
        console.error('Error fetching events data:', error);
    }
});
