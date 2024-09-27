// Course Data
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Function to calculate total credits dynamically
function calculateTotalCredits(filteredCourses) {
    return filteredCourses.reduce((total, course) => total + course.credits, 0);
}

// Function to display courses based on filter
function displayCourses(filteredCourses) {
    const courseListElement = document.getElementById('course-list');
    courseListElement.innerHTML = ''; // Clear existing courses

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card ' + (course.completed ? 'completed' : 'not-completed');
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        courseListElement.appendChild(courseCard);
    });

    // Update total credits
    const totalCredits = calculateTotalCredits(filteredCourses);
    document.getElementById('credit-count').textContent = totalCredits;
}

// Function to filter courses
function filterCourses(category) {
    let filteredCourses;
    if (category === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === category);
    }
    displayCourses(filteredCourses);
}

// Initial display of all courses
displayCourses(courses);

// Set current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
