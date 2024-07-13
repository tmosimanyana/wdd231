document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    document.getElementById('last-modified').textContent = document.lastModified;

    const courses = [
        { subject: 'CSE', number: 110, title: 'CSE 110', completed: true },
        { subject: 'WDD', number: 130, title: 'WDD 130', completed: false },
        { subject: 'CSE', number: 111, title: 'CSE 111', completed: true },
        { subject: 'CSE', number: 210, title: 'CSE 210', completed: false },
        { subject: 'WDD', number: 131, title: 'WDD 131', completed: false },
        { subject: 'WDD', number: 231, title: 'WDD 231', completed: false }
    ];

    const courseListElement = document.getElementById('course-list');

    function renderCourses(filter) {
        courseListElement.innerHTML = '';
        courses.filter(course => filter === 'all' || course.subject === filter)
            .forEach(course => {
                const courseButton = document.createElement('button');
                courseButton.className = `course-button ${course.completed ? 'completed' : ''}`;
                courseButton.textContent = course.title;
                courseListElement.appendChild(courseButton);
            });
    }

    document.getElementById('show-all').addEventListener('click', () => renderCourses('all'));
    document.getElementById('show-cse').addEventListener('click', () => renderCourses('CSE'));
    document.getElementById('show-wdd').addEventListener('click', () => renderCourses('WDD'));

    renderCourses('all');
});
