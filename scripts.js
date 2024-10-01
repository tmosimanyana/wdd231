const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) and uses them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and careers in web design and development. Hands-on experience in web design is included.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students write programs using functions to solve problems in disciplines such as business and physical sciences.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course covers the concepts of classes, objects, inheritance, and polymorphism in programming.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to create dynamic websites using JavaScript, focusing on user experience and interactivity.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on frontend development, including accessibility, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to dynamically create the course list with descriptions and calculate total credits
function renderCourses(courses) {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';  // Clear the current content

    // Variable to hold total credits
    let totalCredits = 0;

    // Render courses
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course', course.subject.toLowerCase());

        // Apply a different class if the course is completed
        if (course.completed) {
            courseDiv.classList.add('completed');
        }

        // Add content to the course div
        courseDiv.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseList.appendChild(courseDiv);

        // Add credits to total
        totalCredits += course.credits;
    });

    // Update the total credits
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses
function filterCourses(type) {
    let filteredCourses;

    if (type === 'cse') {
        filteredCourses = courses.filter(course => course.subject === 'CSE');
    } else if (type === 'wdd') {
        filteredCourses = courses.filter(course => course.subject === 'WDD');
    } else {
        filteredCourses = courses; // show all
    }

    renderCourses(filteredCourses);
}

// Initialize rendering of all courses
renderCourses(courses);

// Handle responsive navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show'); // Toggle visibility of the menu
});

// Display current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-update').textContent = document.lastModified;
