// Sample Course List Array
const courses = [
    { title: 'Introduction to Programming', code: 'CSE 212', credits: 2, completed: true, type: 'CSE' },
    { title: 'Software Testing', code: 'CSE 270', credits: 3, completed: false, type: 'CSE' },
    { title: 'Professional Readiness', code: 'CSE 300', credits: 1, completed: true, type: 'CSE' },
    { title: 'Applied Programming', code: 'CSE 310', credits: 3, completed: true, type: 'CSE' },
    { title: '.NET Software Development', code: 'CSE 325', credits: 3, completed: true, type: 'CSE' },
    { title: 'Software Engineering Principles', code: 'CSE 370', credits: 2, completed: false, type: 'CSE' },
    { title: 'Web Fundamentals', code: 'WDD 130', credits: 2, completed: true, type: 'WDD' },
    { title: 'Dynamic Web Fundamentals', code: 'WDD 131', credits: 2, completed: false, type: 'WDD' },
    { title: 'Frontend Web Development I', code: 'WDD 231', credits: 2, completed: false, type: 'WDD' }
];

// Function to toggle the menu
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Function to display the current year and last updated date
function displayFooterInfo() {
    const currentYearElement = document.getElementById('current-year');
    const lastUpdatedElement = document.getElementById('last-updated');

    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastUpdatedDate = new Date(document.lastModified);
    lastUpdatedElement.textContent = lastUpdatedDate.toLocaleString();
}

// Function to filter courses
function filterCourses(type) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = ''; // Clear previous courses

    const filteredCourses = type === 'all' ? courses : courses.filter(course => course.type === type);

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        // Highlight completed courses
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;

        coursesContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    document.getElementById('total-credits-required').textContent = totalCredits;
}

// Event listeners
window.onload = () => {
    displayFooterInfo();
    filterCourses('all'); // Display all courses on initial load
};
