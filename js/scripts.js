// Course List Array
const courses = [
    { name: "CSE 110", credits: 3, category: "CSE", completed: true },
    { name: "WDD 130", credits: 3, category: "WDD", completed: false },
    { name: "CSE 111", credits: 3, category: "CSE", completed: true },
    { name: "CSE 210", credits: 4, category: "CSE", completed: false },
    { name: "WDD 131", credits: 3, category: "WDD", completed: true },
    { name: "WDD 231", credits: 3, category: "WDD", completed: false }
];

// Function to display courses
function displayCourses(filter = 'all') {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);

    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.textContent = `${course.name} - ${course.credits} Credits`;
        courseItem.className = course.completed ? 'completed-course' : 'incomplete-course';
        courseList.appendChild(courseItem);
    });
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => displayCourses(button.getAttribute('data-filter')));
});

// Responsive Navigation
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-list-active');
});

// Set current year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});

// Initial display of courses
displayCourses();
