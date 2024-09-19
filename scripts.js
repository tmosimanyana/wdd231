document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
        { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
        { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
        { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
        { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
        { subject: 'CSE', number: 115, title: 'Math for the Real World', credits: 2, completed: true },
        { subject: 'CSE', number: 120, title: 'Introduction to Databases', credits: 2, completed: true },
        { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
    ];

    const courseListDiv = document.getElementById('course-list');
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedP = document.getElementById('lastModified');

    // Display current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Display last modified date
    lastModifiedP.textContent = `Last Updated: ${document.lastModified}`;

    // Function to create and display course cards
    function displayCourses(filter = 'all') {
        courseListDiv.innerHTML = ''; // Clear previous content

        const filteredCourses = courses.filter(course => {
            if (filter === 'CSE') return course.subject === 'CSE';
            if (filter === 'WDD') return course.subject === 'WDD';
            return true; // Show all
        });

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }
            courseCard.innerHTML = `
                <h3>${course.subject} ${course.number} - ${course.title}</h3>
                <p>Credits: ${course.credits}</p>
            `;
            courseListDiv.appendChild(courseCard);
        });
    }

    // Initial display
    displayCourses();

    // Filter buttons
    document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
    document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));
});
