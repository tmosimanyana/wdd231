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

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            if (course.completed) {
                courseCard.classList.add('completed');
            }
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>Subject: ${course.subject}</p>
                <p>Number: ${course.number}</p>
                <p>Credits: ${course.credits}</p>
                <p>Description: ${course.description}</p>
            `;
            coursesContainer.appendChild(courseCard);
        });

        // Calculate total credits
        const totalCredits = courses.reduce((total, course) => total + (course.completed ? course.credits : 0), 0);
        totalCreditsElem.textContent = totalCredits;
    }

    showCSE.addEventListener('click', () => renderCourses('CSE'));
    showWDD.addEventListener('click', () => renderCourses('WDD'));
    showAll.addEventListener('click', () => renderCourses(''));

    renderCourses('');  // Render all courses by default
});
