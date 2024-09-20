// Course data
const courses = [
    { code: 'CSE 110', type: 'CSE' },
    { code: 'WDD 130', type: 'WDD' },
    { code: 'CSE 111', type: 'CSE' },
    { code: 'WDD 131', type: 'WDD' },
    { code: 'CSE 210', type: 'CSE' },
    { code: 'WDD 231', type: 'WDD' },
];

// Dynamically populate the course grid
function loadCourses(filter = 'all') {
    const courseGrid = document.getElementById('course-grid');
    courseGrid.innerHTML = '';

    const filteredCourses = courses.filter(course => filter === 'all' || course.type === filter);
    
    filteredCourses.forEach(course => {
        const courseBox = document.createElement('div');
        courseBox.classList.add('course-box');
        courseBox.textContent = course.code;
        courseGrid.appendChild(courseBox);
    });
}

// Filter courses based on type
function filterCourses(type) {
    loadCourses(type);
}

// Set dynamic year and last update
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-update').textContent = new Date().toLocaleString();

// Load all courses initially
loadCourses();
