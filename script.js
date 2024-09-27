const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        completed: false
    }
];

function filterCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.textContent = `${course.subject} ${course.number}`;
        courseList.appendChild(courseCard);
    });

    updateTotalCredits(filteredCourses);
}

function updateTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    console.log(`Total Credits: ${totalCredits}`);
}

// Dynamically update the year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initial load of all courses
filterCourses('All');
