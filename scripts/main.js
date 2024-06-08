document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { code: 'CSE 110', name: 'Introduction to Computer Science', credits: 3, completed: true },
        { code: 'WDD 130', name: 'Web Design 1', credits: 3, completed: true },
        { code: 'CSE 111', name: 'Programming with Functions', credits: 3, completed: true },
        { code: 'CSE 210', name: 'Data Structures', credits: 3, completed: false },
        { code: 'WDD 131', name: 'Web Design 2', credits: 3, completed: false },
        { code: 'WDD 231', name: 'Web Frontend Development', credits: 3, completed: false }
    ];

    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseContainer = document.querySelector('.course-list');
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    function displayCourses(filter) {
        courseContainer.innerHTML = '';
        courses
            .filter(course => filter === 'All' || course.code.startsWith(filter))
            .forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                if (course.completed) courseCard.classList.add('completed');
                courseCard.innerHTML = `<strong>${course.code}</strong><br>${course.name}<br>${course.credits} credits`;
                courseContainer.appendChild(courseCard);
            });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayCourses(button.getAttribute('data-filter'));
        });
    });

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Update: ${document.lastModified}`;

    displayCourses('All');
});
