// scripts.js

const courses = [
    { name: 'CSE 110', credits: 3, completed: true, category: 'cse' },
    { name: 'WDD 130', credits: 4, completed: false, category: 'wdd' },
    { name: 'CSE 111', credits: 3, completed: true, category: 'cse' },
    { name: 'CSE 210', credits: 3, completed: false, category: 'cse' },
    { name: 'WDD 131', credits: 4, completed: true, category: 'wdd' },
    { name: 'WDD 231', credits: 4, completed: false, category: 'wdd' },
];

// Function to display courses and calculate credits
function displayCourses(coursesToDisplay) {
    const courseListContainer = document.querySelector('.course-list');
    courseListContainer.innerHTML = ''; // Clear previous content

    let totalCreditsRequired = 0; // Total credits required
    let totalCreditsEarned = 0; // Total credits earned

    coursesToDisplay.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course', course.category);
        courseDiv.textContent = course.name;

        if (course.completed) {
            courseDiv.classList.add('completed'); // Highlight completed courses
            totalCreditsEarned += course.credits; // Add credits for completed courses
        }
        
        totalCreditsRequired += course.credits; // Add to total required credits

        courseListContainer.appendChild(courseDiv); // Append course to the list
    });

    // Update total credits in the progress section
    document.getElementById('totalCreditsRequired').textContent = totalCreditsRequired;
    document.getElementById('totalCreditsEarned').textContent = totalCreditsEarned;
}

// Function to filter courses
function filterCourses(category) {
    if (category === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
}

// Function to display current year and last modified date
function displayDateInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
}

// Initial display of all courses
displayCourses(courses);
displayDateInfo();

// Function to toggle mobile menu
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
}
