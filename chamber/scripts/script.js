document.addEventListener('DOMContentLoaded', () => {
    // Set current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set last modified date in the footer
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    // Course data
    const courses = [
        { id: 1, code: 'CSE 110', title: 'Introduction to Computer Science', credits: 4, completed: true },
        { id: 2, code: 'CSE 120', title: 'Web Development', credits: 3, completed: false },
        { id: 3, code: 'WDD 230', title: 'JavaScript Programming', credits: 3, completed: true },
        { id: 4, code: 'CSE 240', title: 'Data Structures', credits: 3, completed: false },
        { id: 5, code: 'WDD 330', title: 'Advanced Web Development', credits: 3, completed: false }
    ];

    // Dynamically generate course list
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        if (course.completed) {
            courseItem.classList.add('completed');
        }
        courseItem.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseList.appendChild(courseItem);
    });

    // Filter courses
    document.getElementById('show-all').addEventListener('click', () => filterCourses('all'));
    document.getElementById('show-cse').addEventListener('click', () => filterCourses('CSE'));
    document.getElementById('show-wdd').addEventListener('click', () => filterCourses('WDD'));

    function filterCourses(type) {
        courseList.innerHTML = '';
        const filteredCourses = type === 'all' ? courses : courses.filter(course => course.code.startsWith(type));
        filteredCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            if (course.completed) {
                courseItem.classList.add('completed');
            }
            courseItem.innerHTML = `
                <h3>${course.code}</h3>
                <p>${course.title}</p>
                <p>Credits: ${course.credits}</p>
            `;
            courseList.appendChild(courseItem);
        });
    }
});
