document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');
    const totalCreditsElem = document.getElementById('total-credits');
    
    // Display current year and last modified date
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    function renderCourses(courses) {
        coursesContainer.innerHTML = '';
        let totalCredits = 0;
        
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }
            
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Subject:</strong> ${course.subject}</p>
                <p><strong>Number:</strong> ${course.number}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
            `;
            
            coursesContainer.appendChild(courseCard);
            if (course.completed) {
                totalCredits += course.credits;
            }
        });

        totalCreditsElem.textContent = totalCredits;
    }

    function filterCourses(subject) {
        if (subject === 'all') {
            renderCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.subject === subject);
            renderCourses(filteredCourses);
        }
    }

    // Initial rendering of all courses
    renderCourses(courses);

    // Export the filterCourses function to be accessible in the HTML file
    window.filterCourses = filterCourses;
});


