document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.classList.add('nav-toggle');
    nav.insertBefore(toggleButton, nav.firstChild);

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-open');
        }
    });
});
