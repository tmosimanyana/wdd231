document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: 'CSE 121B', description: 'Introduction to Programming', credits: 3, completed: true },
        { title: 'CSE 210', description: 'Programming with Classes', credits: 4, completed: false },
        { title: 'CSE 340', description: 'Web Backend Development', credits: 3, completed: false },
        { title: 'WDD 230', description: 'Web Frontend Development', credits: 3, completed: true },
        { title: 'WDD 330', description: 'Web Fullstack Development', credits: 4, completed: false }
    ];

    const courseList = document.getElementById('course-list');
    const totalCreditsElement = document.getElementById('total-credits');

    function displayCourses(filteredCourses) {
        courseList.innerHTML = '';
        filteredCourses.forEach(course => {
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
        });
    }

    function calculateTotalCredits() {
        return courses.reduce((total, course) => total + course.credits, 0);
    }

    document.getElementById('show-all-courses').addEventListener('click', () => {
        displayCourses(courses);
    });

    document.getElementById('show-cse-courses').addEventListener('click', () => {
        const cseCourses = courses.filter(course => course.title.startsWith('CSE'));
        displayCourses(cseCourses);
    });

    document.getElementById('show-wdd-courses').addEventListener('click', () => {
        const wddCourses = courses.filter(course => course.title.startsWith('WDD'));
        displayCourses(wddCourses);
    });

    displayCourses(courses);
    totalCreditsElement.textContent = calculateTotalCredits();
});
