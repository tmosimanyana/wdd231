document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

/* Dark mode CSS class */
const darkModeStyles = `
    body.dark-mode {
        background-color: #333;
        color: #f4f4f4;
    }
    header.dark-mode, footer.dark-mode, .events-weather.dark-mode, .directory.dark-mode {
        background-color: #444;
    }
    .hero-image.dark-mode {
        background-color: #666;
    }
`;

// Adding the dark mode CSS styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
