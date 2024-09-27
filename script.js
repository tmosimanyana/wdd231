// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 140,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course covers dynamic content creation for websites...',
        technology: ['JavaScript'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Advanced Programming',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Advanced programming techniques and algorithms...',
        technology: ['Python', 'C++'],
        completed: false
    }
];

// Filter courses and update the UI
function filterCourses(type) {
    let filteredCourses = courses;
    if (type !== 'all') {
        filteredCourses = courses.filter(course => course.subject === type);
    }
    displayCourses(filteredCourses);
    updateProgressBar(filteredCourses);
}

// Display course cards dynamically
function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    let totalCredits = 0;

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card ' + (course.completed ? 'completed' : 'not-completed');

        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        courseList.appendChild(courseCard);

        totalCredits += course.credits;
    });

    document.getElementById('credit-count').innerText = totalCredits;
}

// Update the progress bar based on completed courses
function updateProgressBar(courseArray) {
    const totalCourses = courseArray.length;
    const completedCourses = courseArray.filter(course => course.completed).length;
    const progressPercent = (completedCourses / totalCourses) * 100;

    document.getElementById('progress-bar-fill').style.width = progressPercent + '%';
    document.getElementById('progress-percent').innerText = progressPercent.toFixed(0) + '%';
}

// Update the current year and last modified date
function updateFooter() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').innerText = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').innerText = lastModified.toLocaleString();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    filterCourses('all'); // Display all courses on load
    updateFooter(); // Update footer with the current year and last modified date
});
