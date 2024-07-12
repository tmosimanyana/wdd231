document.addEventListener("DOMContentLoaded", () => {
    // Set the current year in the footer
    const currentYearSpan = document.getElementById('currentyear');
    currentYearSpan.textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last updated: ${document.lastModified}`;

    // Course list array
    const courses = [
        { code: 'CSE 110', name: 'Introduction to Programming', category: 'CSE', completed: true },
        { code: 'CSE 210', name: 'Data Structures', category: 'CSE', completed: false },
        { code: 'WDD 130', name: 'Web Design', category: 'WDD', completed: true },
        { code: 'WDD 131', name: 'Web Development', category: 'WDD', completed: false },
        { code: 'CSE 111', name: 'Discrete Mathematics', category: 'CSE', completed: true },
        { code: 'WDD 231', name: 'Advanced Web Development', category: 'WDD', completed: false }
    ];

    const courseContainer = document.getElementById('courses');

    // Function to display courses based on filter
    function displayCourses(filter) {
        courseContainer.innerHTML = '';
        let filteredCourses = courses;
        if (filter !== 'all') {
            filteredCourses = courses.filter(course => course.category === filter);
        }

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.textContent = `${course.code}: ${course.name}`;
            courseDiv.classList.add(course.completed ? 'completed' : 'pending');
            courseContainer.appendChild(courseDiv);
        });
    }

    // Filter buttons functionality
    window.filterCourses = (filter) => {
        displayCourses(filter);
    };

    // Display all courses initially
    displayCourses('all');
});

