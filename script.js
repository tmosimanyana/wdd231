// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false // Not completed
    },
    {
        subject: 'DBA',
        number: 212,
        title: 'Introduction to Databases',
        credits: 2,
        completed: false // Not completed
    },
    {
        subject: 'MAT',
        number: 100,
        title: 'Math for Real Life',
        credits: 2,
        completed: false // Not completed
    }
];

// Filter courses and update the UI
function filterCourses(type) {
    let filteredCourses = courses;
    if (type !== 'all') {
        filteredCourses = courses.filter(course => course.subject === type);
    }
    displayCourses(filteredCourses);
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
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;
        courseList.appendChild(courseCard);

        totalCredits += course.credits;
    });

    document.getElementById('credit-count').innerText = totalCredits;

    // Update the progress bar after displaying courses
    updateProgressBar();
}

// Update the progress bar based on completed courses
function updateProgressBar() {
    const completedCourses = courses.filter(course => course.completed).length; // Count completed courses
    const totalCourses = courses.length; // Total number of courses
    const progressPercent = (completedCourses / totalCourses) * 100; // Calculate percentage

    // Update the progress bar width and text display
    document.getElementById('progress-bar-fill').style.width = progressPercent + '%';
    document.getElementById('progress-percent').innerText = progressPercent.toFixed(0) + '%'; // Display percentage
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
