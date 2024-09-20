// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Dynamically populate course list
function populateCourses(filter = 'All') {
    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = ''; // Clear previous content

    const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.subject === filter);

    filteredCourses.forEach(course => {
        const courseBox = document.createElement('div');
        courseBox.className = 'course-box';

        // Add completed styling if course is completed
        if (course.completed) {
            courseBox.classList.add('completed-course');
        }

        courseBox.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p>${course.description}</p>
        `;

        courseContainer.appendChild(courseBox);
    });
}

// Filter courses
function filterCourses(filter) {
    populateCourses(filter);
}

// Calculate total credits
function totalCredits() {
    const total = courses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${total}`;
}

// Footer: current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('footer-year').textContent = `© ${currentYear} Tinny B. Mosimanyana`;
    document.getElementById('footer-updated').textContent = `Last Updated: ${document.lastModified}`;
}

// Initialize page
window.onload = function() {
    populateCourses(); // Populate all courses by default
    totalCredits(); // Display total credits
    updateFooter(); // Update footer with current year and last modified
};

// Responsive menu toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show-menu');
}
