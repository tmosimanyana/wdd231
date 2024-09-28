// Sample array of course objects
const courses = [
    { title: "Introduction to Programming", category: "CSE", credits: 3, completed: true },
    { title: "Web Development Fundamentals", category: "WDD", credits: 4, completed: false },
    { title: "Dynamic Web Development", category: "WDD", credits: 4, completed: false },
    // Add more courses as needed
];

// Function to display courses
function displayCourses(courseArray) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ''; // Clear existing courses
    courseArray.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        if (course.completed) {
            courseCard.classList.add("completed");
        }
        courseCard.innerHTML = `
            <div class="course-header">
                <h3>${course.title}</h3>
                <span class="course-credits">${course.credits} credits</span>
            </div>
        `;
        courseList.appendChild(courseCard);
    });
    updateTotalCredits();
}

// Function to filter courses
function filterCourses(category) {
    const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);
    displayCourses(filteredCourses);
}

// Function to update total credits
function updateTotalCredits() {
    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
    const earnedCredits = courses.filter(course => course.completed).reduce((acc, course) => acc + course.credits, 0);
    document.getElementById("required-credits").textContent = totalCredits;
    document.getElementById("earned-credits").textContent = earnedCredits;
    updateProgressBar(earnedCredits, totalCredits);
}

// Function to update progress bar
function updateProgressBar(earned, total) {
    const progressBar = document.getElementById("progress-bar");
    const percentage = (earned / total) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);
}

// Display the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Initial display of courses
displayCourses(courses);

