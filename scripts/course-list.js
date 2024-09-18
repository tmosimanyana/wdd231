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
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized programmers...',
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
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience and performance optimization...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');
    const showCSE = document.getElementById('show-cse');
    const showWDD = document.getElementById('show-wdd');
    const showAll = document.getElementById('show-all');
    const totalCreditsElem = document.getElementById('total-credits');

    function renderCourses(filter) {
        coursesContainer.innerHTML = '';
        let filteredCourses = courses;

        if (filter === 'CSE') {
            filteredCourses = courses.filter(course => course.subject === 'CSE');
        } else if (filter === 'WDD') {
            filteredCourses = courses.filter(course => course.subject === 'WDD');
        }

        let totalCredits = 0;

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            if (course.completed) {
                courseCard.classList.add('completed');
            }

            courseCard.innerHTML = `
                <h3>${course.subject} ${course.number}: ${course.title}</h3>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            `;

            coursesContainer.appendChild(courseCard);
            totalCredits += course.credits;
        });

        totalCreditsElem.textContent = totalCredits;
    }

    showCSE.addEventListener('click', () => renderCourses('CSE'));
    showWDD.addEventListener('click', () => renderCourses('WDD'));
    showAll.addEventListener('click', () => renderCourses());

    // Initial render showing all courses
    renderCourses();
});
