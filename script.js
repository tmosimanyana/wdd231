document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically display current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Function to dynamically display last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Example courses array (from courses.js)
    const courses = [
        // Insert your courses array from courses.js here
    ];

    // Function to dynamically generate course sections
    function displayCourses(courses) {
        const main = document.querySelector('main');
        main.innerHTML = ''; // Clear previous content
        
        courses.forEach(course => {
            const section = document.createElement('section');
            section.innerHTML = `
                <h2>${course.title}</h2>
                <p>${course.description}</p>
                <p>Credits: ${course.credits}</p>
                <p>Technology: ${course.technology.join(', ')}</p>
            `;
            if (course.completed) {
                section.classList.add('completed-course');
            }
            main.appendChild(section);
        });
    }

    // Initially display all courses
    displayCourses(courses);

    // Example filter function
    document.getElementById('filter-cse').addEventListener('click', function () {
        const cseCourses = courses.filter(course => course.subject === 'CSE');
        displayCourses(cseCourses);
    });

    document.getElementById('filter-wdd').addEventListener('click', function () {
        const wddCourses = courses.filter(course => course.subject === 'WDD');
        displayCourses(wddCourses);
    });

    document.getElementById('filter-all').addEventListener('click', function () {
        displayCourses(courses);
    });

    // Toggle mobile menu
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});


