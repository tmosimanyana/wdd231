function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer content
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');

    // Dynamically set the current year and last modified date
    const currentYear = new Date().getFullYear();
    document.querySelector('#current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.querySelector('#last-modified').textContent = lastModified;
});
