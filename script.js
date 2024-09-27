// Course data array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: false
    }
];

// DOM Elements
const courseListContainer = document.querySelector('.course-list');
const creditsRequiredElement = document.getElementById('credits-required');
const creditsCompletedElement = document.getElementById('credits-completed');
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Dynamically display the course list and credits
function displayCourses(filter) {
    // Clear the course list container
    courseListContainer.innerHTML = '';

    // Filter courses based on the subject (CSE, WDD, or all)
    const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.subject === filter);

    // Display each course as a card
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.classList.add(course.completed ? 'completed' : 'incomplete');  // Apply completed/incomplete class

        // Course content
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.credits} credits</p>
            <p>${course.completed ? 'Completed' : 'Incomplete'}</p>
        `;
        courseListContainer.appendChild(courseDiv);
    });

    // Calculate and display total credits
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    creditsRequiredElement.textContent = `Total Credits Required: ${totalCredits}`;

    // Calculate and display completed credits
    const completedCredits = courses.filter(course => course.completed).reduce((sum, course) => sum + course.credits, 0);
    creditsCompletedElement.textContent = `Credits Completed: ${completedCredits}`;
}

// Filter functionality for buttons (All, CSE, WDD)
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent;
        displayCourses(filter);
    });
});

// Responsive navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('showing');
});

// Dynamically set the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${currentYear} 🌺 Rubia Magdalena Francesco 🌺 Madagascar`;

// Dynamically set the last modified date
document.getElementById('last-update').textContent = document.lastModified;

// Display all courses on initial load
displayCourses('All');
