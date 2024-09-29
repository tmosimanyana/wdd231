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
const creditSummaryButton = document.getElementById('creditSummaryButton'); // Button to show modal
const creditModal = document.getElementById('creditModal');
const modalTotalCredits = document.getElementById('modalTotalCredits');
const modalCreditsEarned = document.getElementById('modalCreditsEarned');
const closeButton = document.getElementById('closeButton');

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

// Show credit summary in modal
creditSummaryButton.addEventListener('click', () => {
    modalTotalCredits.textContent = totalCreditsRequiredElem.textContent;
    modalCreditsEarned.textContent = creditsEarnedElem.textContent;
    creditModal.classList.add('show'); // Use class for animation
});

// Close modal
closeButton.addEventListener('click', () => {
    creditModal.classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === creditModal) {
        creditModal.classList.remove('show');
    }
});

// Toggle navigation menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle active class for hamburger
    navLinks.classList.toggle('show'); // Show or hide navigation links
});

// Initial render of courses
renderCourses();

// Animate the location using Lottie
const locationAnimation = lottie.loadAnimation({
    container: document.getElementById('location-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'path_to_your_location_animation.json' // Replace with the path to your Lottie JSON file
});

// Display current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display last modified date
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
