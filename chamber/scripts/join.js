document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const businessName = document.getElementById('business-name').value;
    const membershipLevel = document.getElementById('membership-level').value;

    // Submit the application (this can be expanded for actual submission logic)
    alert(`Thank you ${name}, your application for ${businessName} at ${membershipLevel} level has been received!`);
});
document.getElementById('timestamp').value = new Date().toISOString();
