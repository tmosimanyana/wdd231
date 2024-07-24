document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            const currentYear = new Date().getFullYear();
            document.getElementById('current-year').textContent = currentYear;
            document.getElementById('last-modified').textContent = document.lastModified;
        });
    
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});
