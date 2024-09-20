const courses = [
    { id: 1, name: "Introduction to Programming", credits: 2, completed: false, type: "CSE" },
    { id: 2, name: "Web Fundamentals", credits: 2, completed: false, type: "WDD" },
    { id: 3, name: "Programming with Functions", credits: 2, completed: false, type: "CSE" },
    { id: 4, name: "Programming with Classes", credits: 2, completed: false, type: "CSE" },
    { id: 5, name: "Dynamic Web Fundamentals", credits: 2, completed: false, type: "WDD" },
    { id: 6, name: "Frontend Web Development I", credits: 2, completed: false, type: "WDD" }
];

// Function to display courses
function displayCourses(filter) {
    const courseListDiv = document.getElementById("course-list");
    courseListDiv.innerHTML = ""; // Clear existing content

    let filteredCourses = filter === 'all' ? courses : courses.filter(course => course.type === filter);

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-card";
        courseDiv.style.borderColor = course.completed ? "green" : "gray"; // Change border color for completed courses
        courseDiv.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? "Completed" : "In Progress"}</p>
            <button onclick="toggleCompletion(${course.id})">Toggle Completion</button>
            <button onclick="deleteCourse(${course.id})">Delete Course</button>
        `;
        courseListDiv.appendChild(courseDiv);
    });

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
}

// Function to add a new course
function addCourse() {
    const courseName = prompt("Enter the course name:");
    const courseCredits = parseInt(prompt("Enter the number of credits:"));
    const courseType = prompt("Enter the course type (CSE/WDD):");

    if (courseName && !isNaN(courseCredits) && (courseType === "CSE" || courseType === "WDD")) {
        const newCourse = {
            id: courses.length + 1,
            name: courseName,
            credits: courseCredits,
            completed: false,
            type: courseType
        };
        courses.push(newCourse);
        displayCourses('all');
    } else {
        alert("Invalid course details.");
    }
}

// Function to toggle completion status
function toggleCompletion(courseId) {
    const course = courses.find(course => course.id === courseId);
    if (course) {
        course.completed = !course.completed;
        displayCourses('all');
    }
}

// Function to delete a course
function deleteCourse(courseId) {
    const index = courses.findIndex(course => course.id === courseId);
    if (index !== -1) {
        courses.splice(index, 1);
        displayCourses('all');
    }
}

// Event listeners for filtering and sorting courses
document.getElementById("filter-all").addEventListener("click", () => displayCourses('all'));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses('CSE'));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses('WDD'));
document.getElementById("sort-credits").addEventListener("click", () => {
    courses.sort((a, b) => a.credits - b.credits);
    displayCourses('all');
});

// Add course button
document.getElementById("add-course-btn").addEventListener("click", addCourse);

// Display current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
});

// Responsive menu functionality
document.getElementById("hamburger").addEventListener("click", function() {
    const nav = document.querySelector("nav");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Initial display of courses
displayCourses('all');
