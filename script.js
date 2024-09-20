const courses = [
    { id: 1, name: "Course 1", credits: 3, completed: true, type: "CSE" },
    { id: 2, name: "Course 2", credits: 4, completed: false, type: "WDD" },
    { id: 3, name: "Course 3", credits: 3, completed: true, type: "CSE" },
    { id: 4, name: "Course 4", credits: 4, completed: false, type: "WDD" }
];

// Function to display courses
function displayCourses(filter) {
    const courseListDiv = document.getElementById("course-list");
    courseListDiv.innerHTML = ""; // Clear existing content

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.type === filter);

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-card";
        courseDiv.style.borderColor = course.completed ? "green" : "gray"; // Change border color for completed courses
        courseDiv.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? "Completed" : "In Progress"}</p>
        `;
        courseListDiv.appendChild(courseDiv);
    });

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filtering courses
document.getElementById("filter-all").addEventListener("click", () => displayCourses('all'));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses('CSE'));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses('WDD'));

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
