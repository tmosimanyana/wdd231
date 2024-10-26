window.onload = function() {
    // Set the current date and time when the form is loaded
    const timestampField = document.getElementById('timestamp');
    const currentDate = new Date();
    timestampField.value = currentDate.toISOString();
    
    // Set the current year and last modified date in the footer
    document.getElementById('year').textContent = currentDate.getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
};
