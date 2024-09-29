document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
        { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
        { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
        { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
        { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
    ];

    let totalCreditsRequired = 0;
    let creditsEarned = 0;

    function renderCourses(filter = 'All') {
        const coursesContainer = document.querySelector('.courses');
        coursesContainer.innerHTML = ''; 

        const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) courseCard.classList.add('completed');
            
            courseCard.innerHTML = `
                <h3>${course.title} (${course.subject} ${course.number})</h3>
                <p>${course.credits} credits</p>
            `;
            coursesContainer.appendChild(courseCard);

            totalCreditsRequired += course.credits;
            if (course.completed) {
                creditsEarned += course.credits;
            }
        });
    }

    function updateProgress() {
        document.getElementById('totalCreditsRequired').textContent = totalCreditsRequired;
        document.getElementById('creditsEarned').textContent = creditsEarned;

        const progressPercent = (creditsEarned / totalCreditsRequired) * 100;
        document.getElementById('progress').style.width = progressPercent + '%';
    }

    document.getElementById('all').addEventListener('click', () => renderCourses('All'));
    document.getElementById('cse').addEventListener('click', () => renderCourses('CSE'));
    document.getElementById('wdd').addEventListener('click', () => renderCourses('WDD'));

    renderCourses();
    updateProgress();

    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
