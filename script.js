// Course data
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to web design and development.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to write, call, debug, and test functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites using JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience, accessibility, and performance.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Update course completion status
function updateCourseCompletion(index) {
    courses[index].completed = true;
    displayCourses();
}

// Filter courses based on completion status
function filterCourses() {
    const filterValue = document.getElementById('filter').value;
    displayCourses(filterValue);
}

// Display courses dynamically
function displayCourses(filter = 'all') {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    let filteredCourses = courses;

    if (filter === 'completed') {
        filteredCourses = courses.filter(course => course.completed);
    } else if (filter === 'incomplete') {
        filteredCourses = courses.filter(course => !course.completed);
    }

    filteredCourses.forEach((course, index) => {
        const li = document.createElement('li');
        li.classList.add(course.completed ? 'completed' : '');
        li.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>Credits: ${course.credits}</p>
            <p>${course.description}</p>
            <button onclick="updateCourseCompletion(${index})" ${course.completed ? 'disabled' : ''}>
                ${course.completed ? 'Completed' : 'Mark as Completed'}
            </button>
        `;
        courseList.appendChild(li);
    });

    displayTotalCredits();
}

// Display total credits
function displayTotalCredits() {
    const totalCredits = courses.reduce((acc, course) => acc + (course.completed ? course.credits : 0), 0);
    document.getElementById('totalCredits').textContent = `Total Completed Credits: ${totalCredits}`;
}

// Display current year and last modified date in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Initial display of courses
displayCourses();
