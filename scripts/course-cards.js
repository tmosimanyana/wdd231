const courses = [
    { name: "WDD 130", title: "Web Fundamentals", credits: 3, completed: true },
    { name: "WDD 230", title: "Web Frontend Development", credits: 3, completed: false },
    { name: "CSE 110", title: "Programming Building Blocks", credits: 3, completed: false },
    // Add more courses as needed
];

const courseList = document.getElementById("course-list");
const totalCredits = document.getElementById("total-credits");

function renderCourses(filter = "all") {
    courseList.innerHTML = "";
    let filteredCourses = courses;

    if (filter === "CSE") {
        filteredCourses = courses.filter(course => course.name.startsWith("CSE"));
    } else if (filter === "WDD") {
        filteredCourses = courses.filter(course => course.name.startsWith("WDD"));
    }

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = `course-card ${course.completed ? "completed" : ""}`;
        courseCard.innerHTML = `<h3>${course.name}</h3><p>${course.title}</p><p>Credits: ${course.credits}</p>`;
        courseList.appendChild(courseCard);
    });

    totalCredits.textContent = courses.reduce((acc, course) => acc + course.credits, 0);
}

document.getElementById("show-all-courses").addEventListener("click", () => renderCourses("all"));
document.getElementById("show-cse-courses").addEventListener("click", () => renderCourses("CSE"));
document.getElementById("show-wdd-courses").addEventListener("click", () => renderCourses("WDD"));

renderCourses();

