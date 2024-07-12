document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Update: ${lastModified}`;

    const courses = [
        { code: "CSE 110", completed: true },
        { code: "WDD 130", completed: false },
        { code: "CSE 111", completed: true },
        { code: "CSE 210", completed: false },
        { code: "WDD 131", completed: true },
        { code: "WDD 231", completed: false },
    ];

    function displayCourses(filter = 'all') {
        const courseContainer = document.getElementById('courses');
        courseContainer.innerHTML = '';
        courses.forEach(course => {
            if (filter === 'all' || course.code.startsWith(filter)) {
                const courseDiv = document.createElement('div');
                courseDiv.textContent = course.code;
                if (course.completed) {
                    courseDiv.style.backgroundColor = 'lightgreen';
                }
                courseContainer.appendChild(courseDiv);
            }
        });
    }

    window.filterCourses = displayCourses;
    displayCourses();
});
