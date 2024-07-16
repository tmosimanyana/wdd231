document.addEventListener('DOMContentLoaded', () => {
    const timestamp = document.getElementById('timestamp');
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    const params = new URLSearchParams(window.location.search);
    const formData = document.getElementById('form-data');
    if (formData) {
        params.forEach((value, key) => {
            const li = document.createElement('li');
            li.textContent = `${key.replace('-', ' ')}: ${value}`;
            formData.appendChild(li);
        });
    }
});

function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}
