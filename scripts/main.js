// scripts/main.js
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Set current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('lastModified').textContent = 'Last Updated: ' + document.lastModified;

// Course List Array
const courses = [
    { code: 'CSE 110', title: 'Introduction to Programming', completed: true },
    { code: 'WDD 130', title: 'Web Development Basics', completed: true },
    { code: 'CSE 111', title: 'Advanced Programming', completed: false },
    { code: 'CSE 210', title: 'Data Structures', completed: false },
    { code: 'WDD 131', title: 'Advanced Web Development', completed: false },
    { code: 'WDD 231', title: 'Full Stack Development', completed: false }
];

function displayCourses(filter) {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';
    courses
        .filter(course => filter === 'all' || course.code.startsWith(filter))
        .forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            if (course.completed) {
                courseItem.classList.add('completed');
            }
            courseItem.textContent = `${course.code} - ${course.title}`;
            courseList.appendChild(courseItem);
        });
}

function filterCourses(filter) {
    displayCourses(filter);
}

// Initial display of all courses
displayCourses('all');

