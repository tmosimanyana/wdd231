(function () {
    const courseSection = document.querySelector('.course-list');
    const totalCreditsElement = document.querySelector('#total-credits');
    const filterButtons = {
        all: document.querySelector('#filter-all'),
        cse: document.querySelector('#filter-cse'),
        wdd: document.querySelector('#filter-wdd')
    };

    // Initialize the application
    function init() {
        const currentYear = new Date().getFullYear();
        document.querySelector('#current-year').textContent = currentYear;
        document.querySelector('#last-modified').textContent = document.lastModified;

        fetch('courses.json')
            .then(response => response.json())
            .then(courses => {
                localStorage.setItem('courses', JSON.stringify(courses));
                loadCourses(courses, localStorage.getItem('courseFilter') || 'all');
                setupFilterButtons(courses);
            })
            .catch(error => console.error('Error fetching courses:', error));
    }

    // Load and display courses
    function loadCourses(courses, filter) {
        courseSection.innerHTML = ''; // Clear existing courses
        const completedCourses = getCompletedCourses();

        const filteredCourses = filterCourses(courses, filter);
        filteredCourses.forEach(course => {
            courseSection.appendChild(createCourseElement(course, completedCourses));
        });

        updateTotalCredits(filteredCourses);
    }

    // Filter courses by category
    function filterCourses(courses, filter) {
        if (filter === 'CSE') return courses.filter(course => course.id.startsWith('CSE'));
        if (filter === 'WDD') return courses.filter(course => course.id.startsWith('WDD'));
        return courses; // All courses
    }

    // Create a course element
    function createCourseElement(course, completedCourses) {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        if (completedCourses.includes(course.id)) {
            course.completed = true;
            courseDiv.classList.add('completed'); // Style completed courses differently
        }

        courseDiv.innerHTML = `
            <h3>${course.id}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
            <button onclick="markCourseCompleted('${course.id}')">Mark as Completed</button>
        `;
        return courseDiv;
    }

    // Update total credits display
    function updateTotalCredits(courses) {
        const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    // Get completed courses from localStorage
    function getCompletedCourses() {
        return JSON.parse(localStorage.getItem('completedCourses')) || [];
    }

    // Setup filter buttons
    function setupFilterButtons(courses) {
        filterButtons.all.addEventListener('click', () => loadCourses(courses, 'all'));
        filterButtons.cse.addEventListener('click', () => loadCourses(courses, 'CSE'));
        filterButtons.wdd.addEventListener('click', () => loadCourses(courses, 'WDD'));
    }

    // Mark course as completed
    window.markCourseCompleted = function (courseId) {
        const completedCourses = getCompletedCourses();
        if (!completedCourses.includes(courseId)) {
            completedCourses.push(courseId);
            localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
            loadCourses(JSON.parse(localStorage.getItem('courses')), localStorage.getItem('courseFilter') || 'all');
        }
    };

    // Initialize the application
    init();
})();
