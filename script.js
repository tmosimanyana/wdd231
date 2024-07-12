document.addEventListener("DOMContentLoaded", function() {
    // Update current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Update last modified date in the footer
    document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

    // Array of course objects
    const courses = [
        { id: 1, code: "CSE 110", name: "Intro to Computer Science", category: "CSE", completed: false },
        { id: 2, code: "WDD 130", name: "Web Development", category: "WDD", completed: true },
        { id: 3, code: "CSE 111", name: "Data Structures", category: "CSE", completed: false },
        { id: 4, code: "CSE 210", name: "Algorithms", category: "CSE", completed: false },
        { id: 5, code: "WDD 131", name: "Advanced Web Development", category: "WDD", completed: true },
        { id: 6, code: "WDD 231", name: "Web Programming", category: "WDD", completed: false }
    ];

    // Function to display courses based on filter
    function displayCourses(filter) {
        const courseContainer = document.getElementById("courses");
        courseContainer.innerHTML = "";

        const filteredCourses = filter === "all" ? courses : courses.filter(course => course.category === filter);

        filteredCourses.forEach(course => {
            const courseElement = document.createElement("div");
            courseElement.className = `course ${course.completed ? 'completed' : ''}`;
            courseElement.textContent = `${course.code} - ${course.name}`;
            courseContainer.appendChild(courseElement);
        });
    }

    // Event listeners for filter buttons
    document.querySelector("button[onclick='filterCourses(\"all\")']").addEventListener("click", function() {
        displayCourses("all");
    });
    document.querySelector("button[onclick='filterCourses(\"CSE\")']").addEventListener("click", function() {
        displayCourses("CSE");
    });
    document.querySelector("button[onclick='filterCourses(\"WDD\")']").addEventListener("click", function() {
        displayCourses("WDD");
    });

    // Initial display of all courses
    displayCourses("all");
});

