// Array of course objects
const courses = [
    { name: "WDD 130", credits: 3, category: "WDD", completed: true },
    { name: "CSE 110", credits: 3, category: "CSE", completed: true },
    { name: "WDD 230", credits: 3, category: "WDD", completed: false },
    { name: "CSE 210", credits: 4, category: "CSE", completed: true },
];

// Function to filter and display courses
function filterCourses(category) {
    const coursesContainer = document.getElementById("courses-container");
    const totalCreditsElement = document.getElementById("total-credits");
    coursesContainer.innerHTML = ""; // Clear previous courses

    let filteredCourses = courses;

    if (category !== 'all') {
        filteredCourses = courses.filter(course => course.category === category);
    }

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        // Check if the course is completed
        if (course.completed) {
            courseDiv.classList.add("completed");
            courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} Credits (Completed)`;
        } else {
            courseDiv.innerHTML = `${course.name} - ${course.credits} Credits`;
        }

        coursesContainer.appendChild(courseDiv);
        totalCredits += course.credits; // Sum the credits
    });

    totalCreditsElement.innerText = `Total Credits: ${totalCredits}`; // Update total credits display
}

// Function to toggle navigation for small screens
document.querySelector(".hamburger").addEventListener("click", () => {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
});

// Update footer with the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Initial display of all courses and total credits
filterCourses('all');
