document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Example course data for demonstration
const courses = [
    { name: "Introduction to Programming", type: "CSE" },
    { name: "Web Fundamentals", type: "WDD" },
    { name: "Dynamic Web Fundamentals", type: "WDD" },
    { name: "Programming with Functions", type: "CSE" },
    { name: "Programming with Classes", type: "CSE" },
    { name: "Introduction to Databases", type: "CSE" },
    { name: "Maths for Real Life", type: "CSE" }
];

// Load course data
function loadCourses(filter) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    const filteredCourses = filter ? courses.filter(course => course.type === filter) : courses;
    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.textContent = course.name;
        courseList.appendChild(courseItem);
    });
    document.getElementById("total-credits").textContent = filteredCourses.length * 3; // Assuming each course is 3 credits
}

// Event listeners for filter buttons
document.getElementById("all-courses").addEventListener("click", () => loadCourses());
document.getElementById("cse-courses").addEventListener("click", () => loadCourses("CSE"));
document.getElementById("wdd-courses").addEventListener("click", () => loadCourses("WDD"));

// Initial load
loadCourses();

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
