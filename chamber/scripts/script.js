document.addEventListener('DOMContentLoaded', () => {
    // Update current year and last modified
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Responsive Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const courses = [
        { code: 'CSE121', name: 'Introduction to Computer Science', type: 'CSE', credits: 3, completed: true },
        { code: 'CSE122', name: 'Data Structures', type: 'CSE', credits: 4, completed: true },
        { code: 'WDD130', name: 'Web Development Basics', type: 'WDD', credits: 3, completed: false },
        { code: 'WDD230', name: 'Advanced Web Development', type: 'WDD', credits: 4, completed: false }
    ];

    const courseContainer = document.getElementById('course-cards');

    function displayCourses(filter = 'all') {
        courseContainer.innerHTML = '';
        const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.type === filter);
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }
            courseCard.innerHTML = `
                <h3>${course.code}: ${course.name}</h3>
                <p>Credits: ${course.credits}</p>
            `;
            courseContainer.appendChild(courseCard);
        });

        const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
        document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
    }

    document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
    document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));

    displayCourses('all');
});
