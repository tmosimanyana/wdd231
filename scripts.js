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
        description: 'Students will learn to write and test functions.',
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
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will focus on user experience and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses
function displayCourses(coursesToShow) {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = ''; // Clear existing content

    coursesToShow.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        if (course.completed) {
            courseItem.classList.add('completed');
        }

        courseItem.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Certificate: ${course.certificate}</p>
            <p>Description: ${course.description}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
            <button class="mark-complete">Mark as Completed</button>
        `;
        
        // Mark course as completed on button click
        courseItem.querySelector('.mark-complete').addEventListener('click', () => {
            course.completed = true;
            displayCourses(courses);
            calculateTotalCredits();
        });

        courseList.appendChild(courseItem);
    });
}

// Function to calculate and display total credits
function calculateTotalCredits() {
    const totalCredits = courses.reduce((sum, course) => sum + (course.completed ? course.credits : 0), 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Filter buttons functionality
document.getElementById('show-all').addEventListener('click', () => displayCourses(courses));
document.getElementById('filter-cse').addEventListener('click', () => {
    const filteredCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(filteredCourses);
});
document.getElementById('filter-wdd').addEventListener('click', () => {
    const filteredCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(filteredCourses);
});
document.getElementById('show-completed').addEventListener('click', () => {
    const completedCourses = courses.filter(course => course.completed);
    displayCourses(completedCourses);
});

// Display initial courses and calculate credits
displayCourses(courses);
calculateTotalCredits();

// Update footer with current year
document.getElementById('current-year').textContent = new Date().getFullYear();
