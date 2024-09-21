const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming, covering variables, decisions, calculations, loops, arrays, and input/output.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the World Wide Web and careers in web design and development, emphasizing hands-on projects.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to write, call, debug, and test functions, becoming more organized and efficient programmers.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects, focusing on encapsulation, inheritance, and polymorphism.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students create dynamic websites using JavaScript to respond to events and enhance user experience.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, and performance optimization in web development.',
        completed: false
    }
];

function displayCourses(filter = 'all') {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    let totalCredits = 0;

    courses.forEach(course => {
        if (filter === 'all' || course.subject === filter) {
            totalCredits += course.credits;
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) courseCard.classList.add('completed');
            courseCard.innerHTML = `
                <h3>${course.subject} ${course.number}: ${course.title}</h3>
                <p>${course.description}</p>
                <p>Credits: ${course.credits}</p>
                <button onclick="markCompleted(${course.number})">${course.completed ? 'Completed' : 'Mark as Completed'}</button>
            `;
            courseList.appendChild(courseCard);
        }
    });

    document.getElementById('total-credits').innerText = `Total Credits: ${totalCredits}`;
}

function markCompleted(courseNumber) {
    const course = courses.find(c => c.number === courseNumber);
    if (course) {
        course.completed = !course.completed;
        displayCourses();
    }
}

function filterCourses(filter) {
    displayCourses(filter);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').innerText = new Date().getFullYear();
    document.getElementById('last-modified').innerText = document.lastModified;
    displayCourses();
});
