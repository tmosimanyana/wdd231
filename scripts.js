// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', function () {
    // Responsive Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Dynamically update the copyright year
    const yearElement = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Dynamically update the last modified date
    const modifiedElement = document.querySelector('.last-modified');
    const lastModified = document.lastModified;
    modifiedElement.textContent = `Last Update: ${lastModified}`;

    // Course List Array
    const courses = [
        { courseId: "CSE 110", courseName: "Programming with Functions", completed: true, credits: 3 },
        { courseId: "CSE 111", courseName: "Programming with Classes", completed: true, credits: 3 },
        { courseId: "WDD 130", courseName: "Web Fundamentals", completed: true, credits: 3 },
        { courseId: "WDD 230", courseName: "Web Frontend Development I", completed: false, credits: 3 },
        { courseId: "CSE 210", courseName: "Database Design", completed: false, credits: 3 },
        { courseId: "WDD 330", courseName: "Web Frontend Development II", completed: false, credits: 3 }
    ];

    // Function to display courses based on filter
    function displayCourses(courseType = "all") {
        const courseSection = document.querySelector('.courses');
        courseSection.innerHTML = ''; // Clear previous courses

        const filteredCourses = courses.filter(course =>
            courseType === 'all' || course.courseId.startsWith(courseType)
        );

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course-card');
            courseDiv.classList.add(course.completed ? 'completed' : 'not-completed');
            courseDiv.innerHTML = `
                <h3>${course.courseId} - ${course.courseName}</h3>
                <p>Credits: ${course.credits}</p>
            `;
            courseSection.appendChild(courseDiv);
        });
    }

    // Function to calculate total credits
    function calculateTotalCredits() {
        const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
        document.querySelector('.total-credits').textContent = `Total Credits: ${totalCredits}`;
    }

    // Display all courses and calculate total credits on page load
    displayCourses();
    calculateTotalCredits();

    // Event Listeners for Filter Buttons
    document.querySelector('.btn-all').addEventListener('click', () => displayCourses('all'));
    document.querySelector('.btn-cse').addEventListener('click', () => displayCourses('CSE'));
    document.querySelector('.btn-wdd').addEventListener('click', () => displayCourses('WDD'));
});
