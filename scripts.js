// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamically update the copyright year
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `©${currentYear} 🌸 Tinny Bothepha Mosimanyana 🌸 Botswana`;

    // 2. Dynamically update the last modified date
    const lastModified = document.querySelector('footer p:nth-child(2)');
    lastModified.textContent = `Last Update: ${document.lastModified}`;

    // 3. Define the course list
    const courses = [
        { code: "CSE 110", name: "Introduction to Programming", completed: true },
        { code: "WDD 130", name: "Web Development Fundamentals", completed: true },
        { code: "CSE 111", name: "Programming with Objects", completed: true },
        { code: "CSE 210", name: "Data Structures", completed: false },
        { code: "WDD 131", name: "Advanced Web Development", completed: false },
        { code: "WDD 231", name: "Web Applications", completed: false }
    ];

    // 4. Function to render courses based on filter
    function renderCourses(filter = 'All') {
        const coursesContainer = document.querySelector('.certificate .courses');
        coursesContainer.innerHTML = '';  // Clear previous courses

        // Filter courses if necessary
        const filteredCourses = courses.filter(course => 
            filter === 'All' || course.code.startsWith(filter)
        );

        // Create and display each course as a button
        filteredCourses.forEach(course => {
            const courseButton = document.createElement('button');
            courseButton.textContent = course.code;
            courseButton.className = course.code.startsWith('CSE') ? 'cse' : 'wdd';

            // If course is completed, apply different styling
            if (course.completed) {
                courseButton.style.backgroundColor = '#5a3d31';  // Darker color for completed
            }

            coursesContainer.appendChild(courseButton);
        });
    }

    // Initially render all courses
    renderCourses();

    // 5. Add filter buttons functionality
    const filterButtons = document.querySelectorAll('.certificate .filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            renderCourses(button.textContent);
        });
    });

    // 6. Responsive navigation toggle (optional if you have a mobile menu button)
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const navBar = document.querySelector('.nav-bar');

    if (mobileNavButton) {
        mobileNavButton.addEventListener('click', () => {
            navBar.classList.toggle('open');
        });
    }

});
