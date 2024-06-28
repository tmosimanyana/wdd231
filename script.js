// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Set the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

    // Array of course objects
    const courses = [
        { code: 'CSE 110', name: 'Introduction to Computer Science', type: 'CSE', completed: false },
        { code: 'WDD 130', name: 'Web Design I', type: 'WDD', completed: true },
        { code: 'CSE 111', name: 'Programming with JavaScript', type: 'CSE', completed: false },
        { code: 'CSE 210', name: 'Data Structures', type: 'CSE', completed: false },
        { code: 'WDD 131', name: 'Web Design II', type: 'WDD', completed: true },
        { code: 'WDD 231', name: 'Advanced CSS', type: 'WDD', completed: false }
    ];

    // Function to display courses
    function displayCourses(filter = 'all') {
        const courseList = document.getElementById('course-list');
        courseList.innerHTML = '';
        courses
            .filter(course => filter === 'all' || course.type === filter)
            .forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                if (course.completed) {
                    courseCard.classList.add('completed');
                }
                courseCard.innerHTML = `
                    <h3>${course.code}</h3>
                    <p>${course.name}</p>
                `;
                courseList.appendChild(courseCard);
            });
    }

    // Initial display of all courses
    displayCourses();

    // Filter function for buttons
    window.filterCourses = function (filter) {
        displayCourses(filter);
    };
});


