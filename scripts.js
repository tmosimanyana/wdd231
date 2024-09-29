// Mock data for the courses
const courses = [
    { code: 'CSE 110', credits: 3, type: 'CSE', completed: true },
    { code: 'CSE 111', credits: 3, type: 'CSE', completed: false },
    { code: 'WDD 130', credits: 4, type: 'WDD', completed: true },
    { code: 'WDD 131', credits: 4, type: 'WDD', completed: false },
    { code: 'CSE 210', credits: 3, type: 'CSE', completed: true },
    { code: 'WDD 231', credits: 4, type: 'WDD', completed: false }
];

// DOM Elements
const coursesContainer = document.querySelector('.courses');
const creditsTotal = document.querySelector('.credits-total');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');

// Function to render course cards
function renderCourses(filter = 'All') {
    // Clear the current courses
    coursesContainer.innerHTML = '';

    // Filter and render courses
    const filteredCourses = courses.filter(course => filter === 'All' || course.type === filter);
    let totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');
        courseCard.innerHTML = `<h3>${course.code}</h3><p>${course.credits} credits</p>`;
        coursesContainer.appendChild(courseCard);
    });

    creditsTotal.innerHTML = `Total Credits: ${totalCredits}`;
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
