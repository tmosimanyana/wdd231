const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages.',
        technology: ['Python'],
        completed: true  // Completed course
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web design and development.',
        technology: ['HTML', 'CSS'],
        completed: true  // Completed course
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Learn to write, debug, and test functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to classes, objects, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience, accessibility, and performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses dynamically
function displayCourses(filteredCourses) {
    const courseList = document.getElementById('courses-container');
    courseList.innerHTML = ''; // Clear previous courses

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-box');

        courseDiv.style.backgroundColor = course.completed ? '#4CAF50' : '#f44336'; // Change color if completed

        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;

        courseList.appendChild(courseDiv);
        totalCredits += course.credits;
    });

    // Update total credits
    const totalCreditsElement = document.getElementById('total-credits');
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Filter courses by subject or show all
function filterCourses(category) {
    let filteredCourses = category === 'all' ? courses : courses.filter(course => course.subject === category);
    displayCourses(filteredCourses);
}

// Display all courses on page load
document.addEventListener('DOMContentLoaded', () => {
    filterCourses('all');
});

// Dynamic copyright year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

// Responsive Menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);
