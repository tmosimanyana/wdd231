const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true,
        description: 'This course will introduce students to programming and the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) to solve problems.'
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true,
        description: 'This course introduces students to the World Wide Web and careers in web design and development, involving hands-on participation in web design and programming.'
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true,
        description: 'Students will learn to research and call functions, write and debug their own functions, and handle errors within functions across various disciplines.'
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true,
        description: 'This course introduces the concepts of classes and objects, encapsulation, inheritance, and polymorphism.'
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true,
        description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.'
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false,
        description: 'This course focuses on user experience, accessibility, compliance, performance optimization, and basic API usage.'
    }
];

const coursesContainer = document.querySelector('.courses');
const totalCreditsRequiredElem = document.getElementById('totalCreditsRequired');
const creditsEarnedElem = document.getElementById('creditsEarned');
const progressBarElem = document.getElementById('progressBar');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Function to render course cards
function renderCourses(filter = 'All') {
    coursesContainer.innerHTML = '';
    const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    const earnedCredits = filteredCourses.reduce((acc, course) => course.completed ? acc + course.credits : acc, 0);

    totalCreditsRequiredElem.textContent = totalCredits;
    creditsEarnedElem.textContent = earnedCredits;

    const progressPercent = totalCredits > 0 ? (earnedCredits / totalCredits) * 100 : 0;
    progressBarElem.style.width = `${progressPercent}%`;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.credits} credits</p>
            <p>${course.description}</p>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Event listeners for filter buttons
allButton.addEventListener('click', () => renderCourses('All'));
cseButton.addEventListener('click', () => renderCourses('CSE'));
wddButton.addEventListener('click', () => renderCourses('WDD'));

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

// Initial render
renderCourses();
