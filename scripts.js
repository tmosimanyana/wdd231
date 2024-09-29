// Date manipulation for footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Update: ' + document.lastModified;

// Course List Array
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Render courses dynamically
const courseContainer = document.querySelector('.courses');

function renderCourses(filter = 'All') {
    let filteredCourses = courses.filter(course => {
        return filter === 'All' || course.subject === filter;
    });

    courseContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.style.backgroundColor = course.completed ? '#8e8e8e' : '#a52a2a';
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseContainer.appendChild(courseCard);
    });
}

// Initial render
renderCourses();

// Add event listeners for filter buttons
document.getElementById('all').addEventListener('click', () => renderCourses('All'));
document.getElementById('cse').addEventListener('click', () => renderCourses('CSE'));
document.getElementById('wdd').addEventListener('click', () => renderCourses('WDD'));
