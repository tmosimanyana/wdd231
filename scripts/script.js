// Toggle the hamburger menu on small screens
document.querySelector('.hamburger').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
});

// Dynamically output the current year in the footer
const yearElement = document.querySelector('.current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Dynamically output the last modified date in the footer
const lastModifiedElement = document.querySelector('.last-modified');
lastModifiedElement.textContent = document.lastModified;

// Array of course objects with completed statuses updated
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to programming.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Learn to write and debug functions.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduces classes and objects.',
        technology: ['C#'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Not completed
    }
];

// Function to dynamically display courses
function displayCourses(courseList) {
    const courseSection = document.querySelector('.course-buttons');
    courseSection.innerHTML = ''; // Clear previous content

    courseList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;

        // Apply different style for completed courses
        if (course.completed) {
            courseCard.classList.add('completed-course');
        } else {
            courseCard.classList.add('incomplete-course');
        }

        courseSection.appendChild(courseCard);
    });
}

// Filter courses by subject (CSE, WDD, or all)
function filterCourses(subject) {
    if (subject === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
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
