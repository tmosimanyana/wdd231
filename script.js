/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto:wght@400;500&display=swap');

/* Global Styles */
body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: #005f99; /* Primary color */
}

h1 {
    font-size: 2.5em;
}

h2 {
    font-size: 1.8em;
}

/* Header Styles */
header {
    background-color: #005f99;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

header .profile {
    display: flex;
    align-items: center;
}

header .profile img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-right: 15px;
}

header h1 {
    margin: 0;
    font-size: 1.8rem;
}

/* Navigation Menu */
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li {
    margin-left: 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #ffdd57; /* Yellow hover effect */
}

nav ul li a:focus {
    outline: 2px dashed white; /* Accessibility focus */
}

.nav-toggle {
    display: none;
}

/* Main Section */
main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
}

.coursework, .toloria, .certificate {
    margin-bottom: 2rem;
}

/* Certificate Section */
.certificate h2 {
    color: #003f6b;
    font-weight: 700;
    margin-bottom: 1rem;
}

.filter-buttons button {
    background-color: #005f99;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.filter-buttons button:hover {
    background-color: #003f6b;
}

.course-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

/* Course Card Styling */
.course {
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
}

.course:hover {
    background-color: #d6eaff;
    transform: translateY(-3px);
}

.completed {
    background-color: #4caf50;
    color: white;
}

.incomplete {
    background-color: #f44336;
    color: white;
}

/* Footer Styling */
footer {
    background-color: #003f6b;
    color: white;
    text-align: center;
    padding: 15px 0;
}

footer p {
    margin: 0;
    font-size: 1rem;
}

/* Responsive Design - Navigation */
@media (max-width: 768px) {
    nav ul {
        display: none;
    }
    
    .nav-toggle {
        display: block;
        background-color: transparent;
        border: 2px solid white;
        color: white;
        padding: 8px 10px;
        cursor: pointer;
    }

    nav ul.showing {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}

@media (min-width: 769px) {
    header {
        justify-content: space-between;
    }
}

/* Mobile First - Responsive Layout */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5rem;
    }

    .profile img {
        width: 50px;
        height: 50px;
    }

    .course-list {
        grid-template-columns: 1fr;
    }
}

/* Larger screens */
@media (min-width: 1100px) {
    main {
        padding: 40px;
    }

    h1 {
        font-size: 3rem;
    }
}
