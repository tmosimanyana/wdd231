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

// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands-on with students participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students learn to research, call functions, write, call, debug, and test their own functions to solve various problems.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects, encapsulation, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students learn to create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to dynamically display courses
function displayCourses(courseList) {
    const courseSection = document.querySelector('.course-buttons');
    courseSection.innerHTML = '';  // Clear previous content

    courseList.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.textContent = `${course.subject} ${course.number}`;

        // Apply different style for completed courses
        if (course.completed) {
            courseButton.classList.add('completed-course');
        } else {
            courseButton.classList.add('incomplete-course');
        }

        courseSection.appendChild(courseButton);
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
