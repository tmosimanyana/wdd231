document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    timestampField.value = now.toISOString();
});
