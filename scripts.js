// Courses array
const courses = [
    { id: 'CSE 110', name: 'CSE 110', category: 'cse', credits: 3, completed: true },
    { id: 'WDD 130', name: 'WDD 130', category: 'wdd', credits: 3, completed: true },
    { id: 'CSE 111', name: 'CSE 111', category: 'cse', credits: 4, completed: false },
    { id: 'CSE 210', name: 'CSE 210', category: 'cse', credits: 4, completed: true },
    { id: 'WDD 131', name: 'WDD 131', category: 'wdd', credits: 3, completed: false },
    { id: 'WDD 231', name: 'WDD 231', category: 'wdd', credits: 3, completed: true }
];

// Function to display courses
function displayCourses(filteredCourses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    let totalCredits = 0;

    // Generate the course cards
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        
        if (course.completed) {
            courseDiv.classList.add('completed');  // Mark completed courses
        }
        
        courseDiv.textContent = `${course.name} (${course.credits} credits)`;
        courseList.appendChild(courseDiv);

        // Add up credits
        totalCredits += course.credits;
    });

    // Update total credits
    document.getElementById('total-credits').textContent = totalCredits;
}

// Filter function
function filterCourses(category) {
    let filteredCourses;
    
    if (category === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === category);
    }

    displayCourses(filteredCourses);
}

// Initialize the page with all courses displayed
filterCourses('all');

// Set current year and last modified date in footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-update').textContent = document.lastModified;
