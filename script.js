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
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the notion of classes and objects. It will present encapsulation at a conceptual level, working with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, performance optimization, and basic client-side storage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'DBA',
        number: 212,
        title: 'Introduction to Databases',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will gain experience in using SQL to access and manage databases.',
        technology: ['SQL'],
        completed: true
    },
    {
        subject: 'MAT',
        number: 100,
        title: 'Math for Real Life',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course provides students with an understanding of math as it relates to real life. Topics include percentages, measurements, ratios, and statistics.',
        technology: ['Excel'],
        completed: true
    }
];

// Filter courses and update the UI
function filterCourses(type) {
    let filteredCourses = courses;
    if (type !== 'all') {
        filteredCourses = courses.filter(course => course.subject === type);
    }
    displayCourses(filteredCourses);
}

// Display course cards dynamically
function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    let totalCredits = 0;

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card ' + (course.completed ? 'completed' : 'not-completed');

        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        courseList.appendChild(courseCard);

        totalCredits += course.credits;
    });

    document.getElementById('credit-count').innerText = totalCredits;

    // Update progress bar
    updateProgressBar();
}

// Update the progress bar based on completed courses
function updateProgressBar() {
    const completedCourses = courses.filter(course => course.completed).length;
    const totalCourses = courses.length;
    const progress = (completedCourses / totalCourses) * 100;

    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('progress-text').innerText = `${Math.round(progress)}%`;
}

// Update the current year and last modified date
function updateFooter() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').innerText = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').innerText = lastModified.toLocaleString();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    filterCourses('all'); // Display all courses on load
    updateFooter(); // Update footer with the current year and last modified date
});
