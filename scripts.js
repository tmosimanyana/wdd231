// Typing Effect
document.addEventListener('DOMContentLoaded', () => {
    const text = "My Course Home Page";
    let index = 0;
    const typingSpeed = 100; // Speed in milliseconds

    function typeText() {
        if (index < text.length) {
            document.getElementById('typing-effect').textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }
    typeText();
});

// Fade-in effect on scroll
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const positionFromTop = el.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Lightbox functionality
document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});

// Back-to-Top Button
const topButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Slideshow functionality (Optional, if you want to add a slideshow)
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    slides.forEach((slide) => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();
