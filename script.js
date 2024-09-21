// Store the courses in an array
const courses = [
    { code: 'CSE 110', type: 'CSE' },
    { code: 'WDD 130', type: 'WDD' },
    { code: 'CSE 111', type: 'CSE' },
    { code: 'CSE 210', type: 'CSE' },
    { code: 'WDD 131', type: 'WDD' },
    { code: 'WDD 231', type: 'WDD' }
];

// Function to display the filtered courses
function displayCourses(filter) {
    const courseContainer = document.querySelector('.course-grid');
    courseContainer.innerHTML = ''; // Clear the container

    // Filter courses based on the selected filter (All, CSE, WDD)
    const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.type === filter);

    // Create buttons for the filtered courses
    filteredCourses.forEach(course => {
        const courseBtn = document.createElement('button');
        courseBtn.classList.add('course-btn');
        courseBtn.textContent = course.code;
        courseContainer.appendChild(courseBtn);
    });
}

// Event listeners for the filter buttons
document.querySelector('#filter-all').addEventListener('click', () => displayCourses('All'));
document.querySelector('#filter-cse').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('#filter-wdd').addEventListener('click', () => displayCourses('WDD'));

// Display all courses by default on page load
displayCourses('All');
