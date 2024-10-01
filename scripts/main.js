const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true // I have completed this course
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true // I have completed this course
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will help students become more organized...',
        technology: ['Python'],
        completed: true // I have completed this course
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: true // I have completed this course
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // I have completed this course
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // This course is not completed yet
    }
];

// DOM Manipulation for displaying courses and filtering
document.addEventListener('DOMContentLoaded', function() {
    const courseContainer = document.querySelector('#course-list');
    const allBtn = document.querySelector('#show-all');
    const cseBtn = document.querySelector('#show-cse');
    const wddBtn = document.querySelector('#show-wdd');
    const totalCreditsEl = document.querySelector('#total-credits');

    // Function to dynamically display courses
    function displayCourses(courses) {
        courseContainer.innerHTML = ''; // Clear previous content

        // Calculate total credits dynamically using reduce
        const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsEl.textContent = totalCredits; // Update total credits in the DOM

        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed-course');
            }

            // Add course status to the inner HTML
            const status = course.completed ? 'Completed' : 'Not Completed';

            courseCard.innerHTML = `
                <h3>${course.title} (${course.subject} ${course.number})</h3>
                <p>${course.description}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
                <p><strong>Status:</strong> ${status}</p> <!-- Display course status -->
            `;

            courseContainer.appendChild(courseCard);
        });
    }

    // Event listeners for course filtering
    allBtn.addEventListener('click', () => displayCourses(courses));
    cseBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'CSE')));
    wddBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'WDD')));

    displayCourses(courses); // Initial display of all courses

    // Display current year in footer
    const currentYearEl = document.querySelector('#currentyear');
    currentYearEl.textContent = new Date().getFullYear();

    // Display last modified date
    const lastModifiedEl = document.querySelector('#lastModified');
    lastModifiedEl.textContent = `Last Updated: ${document.lastModified}`;
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle visibility of navigation links
});
