// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Update the current year in the footer
    const currentYearSpan = document.getElementById('currentyear');
    currentYearSpan.textContent = new Date().getFullYear();

    // Update the last modified date in the footer
    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = 'Last Updated: ' + document.lastModified;

    // Course data
    const courses = [
        { id: 'CSE 110', title: 'Introduction to Computer Science', completed: true },
        { id: 'WDD 130', title: 'Web Development Basics', completed: true },
        { id: 'CSE 111', title: 'Programming Fundamentals', completed: false },
        { id: 'CSE 210', title: 'Advanced Programming', completed: false },
        { id: 'WDD 131', title: 'Intermediate Web Development', completed: true },
        { id: 'WDD 231', title: 'Advanced Web Development', completed: false }
    ];

    // Populate the course list
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.textContent = `${course.id} - ${course.title}`;
        if (course.completed) {
            courseButton.classList.add('completed');
        }
        courseList.appendChild(courseButton);
    });

    // Filter courses
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent;
            courseList.innerHTML = '';
            courses.forEach(course => {
                if (category === 'All' || course.id.startsWith(category)) {
                    const courseButton = document.createElement('button');
                    courseButton.textContent = `${course.id} - ${course.title}`;
                    if (course.completed) {
                        courseButton.classList.add('completed');
                    }
                    courseList.appendChild(courseButton);
                }
            });
        });
    });
});

