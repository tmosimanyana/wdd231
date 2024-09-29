// Set the Last Modified Date in the Footer
document.getElementById('lastModified').textContent = document.lastModified;

// Add filtering functionality for courses
document.getElementById('all').addEventListener('click', () => {
    displayAllCourses();
});

document.getElementById('cse').addEventListener('click', () => {
    filterCourses('CSE');
});

document.getElementById('wdd').addEventListener('click', () => {
    filterCourses('WDD');
});

function displayAllCourses() {
    const allCourses = document.querySelectorAll('.course-card');
    allCourses.forEach(course => {
        course.style.display = 'block';
    });
}

function filterCourses(category) {
    const allCourses = document.querySelectorAll('.course-card');
    allCourses.forEach(course => {
        if (course.textContent.includes(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}
