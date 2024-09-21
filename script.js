const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: false },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Responsive menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Displaying the courses dynamically
function displayCourses(filteredCourses) {
    const courseList = document.getElementById('filtered-course-list');
    courseList.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-list');
        courseItem.innerHTML = `<button class="${course.completed ? 'completed' : ''}">
            ${course.subject} ${course.number} - ${course.title} (${course.credits} credits)
        </button>`;
        courseList.appendChild(courseItem);
    });
    calculateTotalCredits(filteredCourses);
}

function calculateTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((total, course) => total + (course.completed ? course.credits : 0), 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Filter function
function filterCourses(category) {
    const filteredCourses = courses.filter(course => 
        category === 'all' || course.subject === category
    );
    displayCourses(filteredCourses);
}

// Setting current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initial display of courses
filterCourses('all');
