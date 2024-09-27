const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and careers in web design.',
        technology: ['HTML', 'CSS'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course teaches the use of functions in Python programming.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concept of object-oriented programming with classes.',
        technology: ['C#'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course teaches dynamic web development with JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on frontend web development, including user experience and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Not Completed
    }
];

// Function to dynamically render the course cards
function renderCourses(filter) {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = ''; // Clear previous courses

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject === filter.toUpperCase());

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('button');
        courseCard.classList.add('course');
        courseCard.classList.add(course.subject.toLowerCase());

        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `${course.subject} ${course.number}: ${course.title}`;
        courseList.appendChild(courseCard);
    });
}

// Function to calculate and display total credits
function calculateCredits() {
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    const completedCredits = courses.filter(course => course.completed).reduce((total, course) => total + course.credits, 0);

    document.getElementById('credits-required').textContent = `Total Credits Required: ${totalCredits}`;
    document.getElementById('credits-completed').textContent = `Total Credits Earned: ${completedCredits}`;
}

// Event listeners for filtering courses
document.getElementById('filter-all').addEventListener('click', () => {
    renderCourses('all');
});

document.getElementById('filter-cse').addEventListener('click', () => {
    renderCourses('cse');
});

document.getElementById('filter-wdd').addEventListener('click', () => {
    renderCourses('wdd');
});

// Initial render
window.onload = () => {
    renderCourses('all');
    calculateCredits();
};
