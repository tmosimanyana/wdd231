// Course List Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true // Change to true for completed courses
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites using JavaScript to respond to events.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on user experience, accessibility, and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Dynamically display courses
function displayCourses() {
    const courseContainer = document.getElementById('courses-container');
    courseContainer.innerHTML = ''; // Clear previous content

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Add 'completed' class if the course is completed
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        courseContainer.appendChild(courseCard);
    });
}

// Calculate total credits using reduce
function calculateTotalCredits() {
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Display current year and last modified date
function displayFooterInfo() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;
}

// Initialize functions on page load
window.addEventListener('DOMContentLoaded', () => {
    displayCourses();
    calculateTotalCredits();
    displayFooterInfo();
});
