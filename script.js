document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web...',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects...',
            technology: ['C#'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    function renderCourses(filter = 'All') {
        const coursesContainer = document.querySelector('.courses');
        const courseList = document.getElementById('course-list'); // Added this line
        coursesContainer.innerHTML = ''; 
        courseList.innerHTML = ''; // Clear previous course list items

        let totalCreditsRequired = 0;
        let creditsEarned = 0;

        const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

        if (filteredCourses.length === 0) {
            coursesContainer.innerHTML = '<p>No courses found for this filter.</p>';
            updateProgress(totalCreditsRequired, creditsEarned);
            return;
        }

        filteredCourses.forEach(course => {
            const courseCard = createCourseCard(course);
            coursesContainer.appendChild(courseCard);

            // Add course status to the course list
            const listItem = document.createElement('li');
            const statusIndicator = course.completed ? '✅ Completed' : '❌ Not Completed';
            listItem.innerHTML = `${course.title} (${course.subject} ${course.number}) - ${statusIndicator}`;
            courseList.appendChild(listItem);

            totalCreditsRequired += course.credits;
            if (course.completed) {
                creditsEarned += course.credits;
            }
        });

        updateProgress(totalCreditsRequired, creditsEarned);
    }

    function createCourseCard(course) {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');
        
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.credits} credits</p>
            <p>${course.description}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
        `;
        return courseCard;
    }

    function updateProgress(totalCreditsRequired, creditsEarned) {
        document.getElementById('totalCreditsRequired').textContent = totalCreditsRequired;
        document.getElementById('creditsEarned').textContent = creditsEarned;

        const progressPercent = (totalCreditsRequired > 0) ? (creditsEarned / totalCreditsRequired) * 100 : 0;
        document.getElementById('progress').style.width = progressPercent + '%';
    }

    document.getElementById('all').addEventListener('click', () => renderCourses('All'));
    document.getElementById('cse').addEventListener('click', () => renderCourses('CSE'));
    document.getElementById('wdd').addEventListener('click', () => renderCourses('WDD'));

    renderCourses();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
