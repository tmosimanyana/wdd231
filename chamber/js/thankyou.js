document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById('thankyou-first-name').textContent = urlParams.get('first-name');
    document.getElementById('thankyou-last-name').textContent = urlParams.get('last-name');
    document.getElementById('thankyou-email').textContent = urlParams.get('email');
    document.getElementById('thankyou-phone').textContent = urlParams.get('phone');
    document.getElementById('thankyou-business-name').textContent = urlParams.get('business-name');
    document.getElementById('thankyou-timestamp').textContent = urlParams.get('timestamp');
});
