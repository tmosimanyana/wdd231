const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        description: 'This course introduces programming fundamentals.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        description: 'Introduction to web development concepts.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        description: 'Learn to create and use functions in programming.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        description: 'Introduction to object-oriented programming.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        description: 'Build dynamic websites using JavaScript.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        description: 'Focus on user experience and accessibility.',
        completed: false
    }
];

function filterCourses(category) {
    const courseListDiv = document.getElementById('course-list');
    courseListDiv.innerHTML = '';

    const filteredCourses = courses.filter(course => {
        if (category === 'all') return true;
        if (category === 'completed') return course.completed;
        return course.subject === category;
    });

    renderCourses(filteredCourses);
}

function renderCourses(courseArray) {
    const courseListDiv = document.getElementById('course-list');
    courseListDiv.innerHTML = '';

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card' + (course.completed ? ' completed' : '');
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        courseListDiv.appendChild(courseCard);
    });

    displayTotalCredits();
}

function displayTotalCredits() {
    const totalCredits = courses.reduce((total, course) => total + (course.completed ? course.credits : 0), 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initial render of all courses
filterCourses('all');
