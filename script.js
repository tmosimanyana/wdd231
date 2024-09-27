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
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic client-side storage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'DBA',
        number: 212,
        title: 'Introduction to Databases',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to the concepts and techniques used to store, retrieve and manipulate data in databases. Students will gain experience in using Structured Query Language (SQL) to access and manage databases.',
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

// Function to calculate progress
function calculateProgress() {
    const totalCourses = courses.length;
    const completedCourses = courses.filter(course => course.completed).length;
    const progressPercentage = (completedCourses / totalCourses) * 100;

    document.getElementById('progress-percentage').innerText = `Progress: ${progressPercentage.toFixed(2)}% (${completedCourses} out of ${totalCourses} courses completed)`;
    updateProgressBar(progressPercentage);
}

// Function to update the progress bar
function updateProgressBar(percentage) {
    const progressBarFill = document.getElementById('progress-bar-fill');
    progressBarFill.style.width = `${percentage}%`;
}

// Filter courses and update the UI
function filterCourses(type) {
    let filteredCourses = courses;
    if (type !== 'all') {
        filteredCourses = courses.filter(course => {
            return type === 'completed' ? course.completed : !course.completed;
        });
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
    calculateProgress(); // Calculate and display progress
    updateFooter(); // Update footer with the current year and last modified date
});
