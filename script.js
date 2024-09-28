const courses = [
    { name: 'Web Development I', credits: 3, category: 'WDD', completed: false },
    { name: 'Introduction to Programming', credits: 4, category: 'CSE', completed: false },
    { name: 'Database Systems', credits: 3, category: 'CSE', completed: false },
    { name: 'User Interface Design', credits: 2, category: 'WDD', completed: false },
];

function sortCourses() {
    const sortCriteria = document.getElementById('sort').value;
    let sortedCourses;

    if (sortCriteria === 'name') {
        sortedCourses = courses.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === 'credits') {
        sortedCourses = courses.sort((a, b) => a.credits - b.credits);
    }

    displayCourses(sortedCourses);
}

function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear existing courses

    courseArray.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `${course.name} - ${course.credits} Credits `;
        
        // Add button to mark course as completed
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete Course';
        completeButton.onclick = () => markCourseCompleted(course.name);
        
        courseDiv.appendChild(completeButton);
        courseList.appendChild(courseDiv);
    });
}

// Function to update the earned credits and progress
function updateProgress() {
    const requiredCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const earnedCredits = courses.filter(course => course.completed).reduce((sum, course) => sum + course.credits, 0);
    
    document.getElementById('required-credits').innerText = requiredCredits;
    document.getElementById('earned-credits').innerText = earnedCredits;

    // Calculate progress percentage
    const progressPercentage = (earnedCredits / requiredCredits) * 100;

    // Update the progress bar width with animation
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progressPercentage + '%';
    progressBar.querySelector('.tooltip').innerText = `${Math.round(progressPercentage)}% Completed`;
}

// Example function to mark a course as completed
function markCourseCompleted(courseName) {
    const course = courses.find(c => c.name === courseName);
    if (course) {
        course.completed = true;
        updateProgress(); // Update progress after marking a course completed
    }
}

// Initialize the progress display
updateProgress(); // Initialize the progress display

// Set current year and last modified date
document.getElementById('current-year').innerText = new Date().getFullYear();
document.getElementById('last-modified').innerText = document.lastModified;
