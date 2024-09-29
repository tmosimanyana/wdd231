const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

function renderCourses(filter = 'all') {
    const courseListContainer = document.querySelector('.course-list');
    courseListContainer.innerHTML = ''; // Clear existing content

    const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);
    let totalCreditsRequired = 0;
    let totalCreditsEarned = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Add class for completed courses
        if (course.completed) {
            courseCard.classList.add('completed');
            totalCreditsEarned += course.credits; // Count earned credits
        }

        totalCreditsRequired += course.credits; // Count total required credits

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseListContainer.appendChild(courseCard);
    });

    // Display total credits and progress
    const creditsInfo = document.createElement('div');
    creditsInfo.innerHTML = `<strong>Total Credits Required:</strong> ${totalCreditsRequired} | <strong>Total Credits Earned:</strong> ${totalCreditsEarned}`;
    courseListContainer.appendChild(creditsInfo);

    // Display progress bar
    const progressBarContainer = document.createElement('div');
    const progressPercentage = (totalCreditsEarned / totalCreditsRequired) * 100 || 0; // Avoid division by zero
    progressBarContainer.innerHTML = `
        <div class="progress-bar" style="width: ${progressPercentage}%; height: 20px; background-color: #76c7c0;"></div>
    `;
    courseListContainer.appendChild(progressBarContainer);
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filter-all').addEventListener('click', () => renderCourses('all'));
    document.getElementById('filter-cse').addEventListener('click', () => renderCourses('CSE'));
    document.getElementById('filter-wdd').addEventListener('click', () => renderCourses('WDD'));

    // Initial render
    renderCourses();

    // Set the current year and last modified date dynamically
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});
