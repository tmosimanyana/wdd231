const courses = [
    { name: 'CSE 110', credits: 3, type: 'CSE', completed: true },
    { name: 'WDD 130', credits: 3, type: 'WDD', completed: false },
    { name: 'CSE 111', credits: 3, type: 'CSE', completed: true },
    { name: 'CSE 210', credits: 3, type: 'CSE', completed: false },
    { name: 'WDD 131', credits: 3, type: 'WDD', completed: true },
    { name: 'WDD 231', credits: 3, type: 'WDD', completed: false },
];

function displayCourses(filter) {
    const courseContainer = document.querySelector('.courses');
    courseContainer.innerHTML = ''; // Clear existing courses
    courses.forEach(course => {
        if (filter === 'all' || course.type === filter) {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item', course.type);
            courseItem.textContent = course.name + (course.completed ? ' (Completed)' : '');
            if (course.completed) {
                courseItem.classList.add('completed'); // Add completed class
            }
            courseContainer.appendChild(courseItem);
        }
    });
    calculateCredits(); // Update total credits after displaying courses
}

document.getElementById('filter-all').onclick = () => displayCourses('all');
document.getElementById('filter-cse').onclick = () => displayCourses('CSE');
document.getElementById('filter-wdd').onclick = () => displayCourses('WDD');

// Function to calculate total credits
function calculateCredits() {
    const totalCredits = courses.reduce((sum, course) => {
        return course.completed ? sum + course.credits : sum;
    }, 0);
    document.getElementById('total-credits-earned').textContent = `Total Credits Earned: ${totalCredits}`;
}

// Display courses on initial load
displayCourses('all');

// Dynamically display current year and last modified date
const lastModified = new Date(document.lastModified).toLocaleDateString();
document.getElementById('last-modified').textContent = lastModified;

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
