// Course data
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Render courses based on filter
function renderCourses(filter = 'all') {
    const courseListContainer = document.querySelector('.course-list');
    courseListContainer.innerHTML = ''; // Clear previous content

    const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);
    let totalCreditsRequired = 0;
    let totalCreditsEarned = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        if (course.completed) {
            courseCard.classList.add('completed');
            totalCreditsEarned += course.credits;
        }
        totalCreditsRequired += course.credits;

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseListContainer.appendChild(courseCard);
    });

    // Display total credits
    const creditsInfo = document.createElement('div');
    creditsInfo.innerHTML = `<strong>Total Credits Required:</strong> ${totalCreditsRequired} | <strong>Total Credits Earned:</strong> ${totalCreditsEarned}`;
    courseListContainer.appendChild(creditsInfo);

    // Display progress bar
    const progressBarContainer = document.createElement('div');
    const progressPercentage = (totalCreditsEarned / totalCreditsRequired) * 100 || 0;
    progressBarContainer.innerHTML = `
        <div class="progress-bar" style="width: ${progressPercentage}%"></div>
    `;
    courseListContainer.appendChild(progressBarContainer);
}

// Filter buttons functionality
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filter-all').addEventListener('click', () => renderCourses('all'));
    document.getElementById('filter-cse').addEventListener('click', () => renderCourses('CSE'));
    document.getElementById('filter-wdd').addEventListener('click', () => renderCourses('WDD'));

    // Initial render
    renderCourses();

    // Set current year and last modified
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});
