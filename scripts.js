// scripts.js

// Function to toggle mobile navigation
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active'); // Toggle the active class
}

// Populate current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Populate last modified date in the footer
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Example course data (modify according to your completed courses)
const courses = [
    { name: 'CSE 110', completed: true, category: 'cse' },
    { name: 'WDD 130', completed: false, category: 'wdd' },
    { name: 'CSE 111', completed: true, category: 'cse' },
    { name: 'CSE 210', completed: false, category: 'cse' },
    { name: 'WDD 131', completed: true, category: 'wdd' },
    { name: 'WDD 231', completed: false, category: 'wdd' },
];

// Function to display courses
function displayCourses(coursesToDisplay) {
    const courseListContainer = document.querySelector('.course-list');
    courseListContainer.innerHTML = ''; // Clear previous content

    coursesToDisplay.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course', course.category);
        courseDiv.textContent = course.name;
        
        if (course.completed) {
            courseDiv.style.backgroundColor = '#d4edda'; // Highlight completed courses
        }

        courseListContainer.appendChild(courseDiv); // Append course to the list
    });
}

// Function to filter courses
function filterCourses(category) {
    if (category === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
}

// Initial display of all courses
displayCourses(courses);
