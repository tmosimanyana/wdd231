// Function to toggle the theme
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    document.querySelector('header').classList.toggle('dark-mode'); // Toggle dark mode class on header
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode'; // Change button text
});

// Check for saved user preference on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = 'Light Mode'; // Set initial button text
}

// Save user preference in localStorage
document.getElementById('theme-toggle').addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});
