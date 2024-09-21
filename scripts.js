// Course data in JSON format
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: true
    }
];

// Utility to display the courses
function displayCourses(filter) {
    const courseContainer = document.querySelector('.course-list');
    courseContainer.innerHTML = '';

    const filteredCourses = filter ? courses.filter(filter) : courses;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        courseContainer.appendChild(courseCard);
    });

    // Update total credits
    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Filter functions
function showAllCourses() {
    displayCourses();
}

function filterCSECourses() {
    displayCourses(course => course.subject === 'CSE');
}

function filterWDDCourses() {
    displayCourses(course => course.subject === 'WDD');
}

function showCompletedCourses() {
    displayCourses(course => course.completed);
}

// Add event listeners for filtering
document.getElementById('show-all').addEventListener('click', showAllCourses);
document.getElementById('filter-cse').addEventListener('click', filterCSECourses);
document.getElementById('filter-wdd').addEventListener('click', filterWDDCourses);
document.getElementById('show-completed').addEventListener('click', showCompletedCourses);

// Dynamically update the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize page with all courses displayed
showAllCourses();
