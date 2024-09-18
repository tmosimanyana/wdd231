const courses = [
    { title: "Introduction to Programming", completed: false, credits: 3, type: "CSE" },
    { title: "Web Development Basics", completed: true, credits: 4, type: "WDD" },
    { title: "Advanced JavaScript", completed: false, credits: 3, type: "CSE" },
    { title: "Responsive Web Design", completed: true, credits: 4, type: "WDD" },
];

document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');
    const filterButtons = document.querySelectorAll('.filter-button');

    function renderCourses(filterType = '') {
        coursesContainer.innerHTML = '';

        const filteredCourses = filterType
            ? courses.filter(course => course.type === filterType || filterType === 'All')
            : courses;

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }

            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>Credits: ${course.credits}</p>
            `;
            coursesContainer.appendChild(courseCard);
        });

        const totalCredits = courses.reduce((sum, course) => sum + (course.completed ? course.credits : 0), 0);
        document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filterType = e.target.getAttribute('data-filter');
            renderCourses(filterType);
        });
    });

    renderCourses('All');
});
