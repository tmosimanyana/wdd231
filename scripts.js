// Detailed course data
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
        description: 'CSE 111 students become more organized and powerful programmers by learning functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects, encapsulation, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites that use JavaScript to create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, and performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// DOM Elements
const coursesContainer = document.querySelector('.courses');
const totalCreditsRequiredElem = document.getElementById('totalCreditsRequired');
const creditsEarnedElem = document.getElementById('creditsEarned');
const progressBarElem = document.getElementById('progressBar');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');

// Function to render course cards
function renderCourses(filter = 'All') {
    // Clear the current courses
    coursesContainer.innerHTML = '';

    // Filter and render courses
    const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

    // Calculate total credits and earned credits
    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    const earnedCredits = filteredCourses.reduce((acc, course) => course.completed ? acc + course.credits : acc, 0);

    // Update credits in the DOM
    totalCreditsRequiredElem.textContent = totalCredits;
    creditsEarnedElem.textContent = earnedCredits;

    // Update progress bar
    const progressPercent = totalCredits > 0 ? (earnedCredits / totalCredits) * 100 : 0;
    progressBarElem.style.width = `${progressPercent}%`;

    // Render the course cards
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Event listeners for filter buttons
allButton.addEventListener('click', () => renderCourses('All'));
cseButton.addEventListener('click', () => renderCourses('CSE'));
wddButton.addEventListener('click', () => renderCourses('WDD'));

// Display current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display last modified date in footer
document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

// Initial render of all courses
renderCourses();
