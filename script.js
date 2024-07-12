// courses.js
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true // Example: Mark course as completed
    },
    // Add more course objects as needed
];

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');
    const totalCreditsElement = document.getElementById('total-credits');

    // Function to filter courses based on subject (CSE or WDD)
    function filterCourses(subject) {
        courseList.innerHTML = ''; // Clear existing courses
        let totalCredits = 0;

        courses.forEach(course => {
            if (subject === 'all' || course.subject === subject) {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                if (course.completed) {
                    courseCard.classList.add('completed');
                }
                courseCard.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <p>Credits: ${course.credits}</p>
                `;
                courseList.appendChild(courseCard);
                totalCredits += course.credits;
            }
        });

        totalCreditsElement.textContent = totalCredits;
    }

    // Initial load: Show all courses
    filterCourses('all');
});

// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Display last modified date in footer
const lastModified = new Date(document.lastModified).toLocaleString();
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


