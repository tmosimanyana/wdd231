// Toggle the hamburger menu on small screens
document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});

// Dynamically output the current year in the footer
const yearElement = document.querySelector('.current-year');
yearElement.textContent = new Date().getFullYear();

// Dynamically output the last modified date in the footer
const lastModifiedElement = document.querySelector('.last-modified');
lastModifiedElement.textContent = document.lastModified;

// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        description: 'This course introduces programming basics.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        description: 'Introduces web design and development.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        description: 'Learn to write and test functions.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        description: 'Introduces object-oriented programming concepts.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        description: 'Create dynamic websites using JavaScript.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        description: 'Focus on user experience and API usage.',
        completed: false
    }
];

// Function to dynamically display courses
function displayCourses(courseList) {
    const courseSection = document.querySelector('.course-buttons');
    courseSection.innerHTML = '';  // Clear previous content

    courseList.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.textContent = `${course.subject} ${course.number} - ${course.title}`;
        courseButton.title = course.description; // Tooltip for description

        // Apply different style for completed courses
        courseButton.classList.add(course.completed ? 'completed-course' : 'incomplete-course');

        courseSection.appendChild(courseButton);
    });
}

// Filter courses by subject (CSE, WDD, or all)
function filterCourses(subject) {
    const filteredCourses = subject === 'all' 
        ? courses 
        : courses.filter(course => course.subject === subject);
    displayCourses(filteredCourses);
}

// Event listeners for filter buttons
document.querySelector('[data-filter="all"]').addEventListener('click', () => filterCourses('all'));
document.querySelector('[data-filter="CSE"]').addEventListener('click', () => filterCourses('CSE'));
document.querySelector('[data-filter="WDD"]').addEventListener('click', () => filterCourses('WDD'));

// Display all courses by default
displayCourses(courses);

// Calculate total number of credits
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
document.querySelector('.total-credits').textContent = `Total Credits: ${totalCredits}`;
