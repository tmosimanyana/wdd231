const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];

function displayCourses(courseArray) {
    const courseListDiv = document.getElementById('course-list');
    courseListDiv.innerHTML = '';
    let totalCredits = 0;

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card' + (course.completed ? ' completed' : '');
        courseCard.tabIndex = 0; // For keyboard navigation
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        courseListDiv.appendChild(courseCard);
        totalCredits += course.credits;
    });

    document.getElementById('total-credits').innerText = `Total Credits: ${totalCredits}`;
    courseListDiv.style.display = 'block';
    document.getElementById('loading').style.display = 'none'; // Hide loading text
}

function filterCourses(filter) {
    let filteredCourses;
    if (filter === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === filter);
    }
    displayCourses(filteredCourses);
}

// Load current year and last modified date
document.getElementById('year').innerText = new Date().getFullYear();
document.getElementById('last-modified').innerText = document.lastModified;

// Simulate loading delay
setTimeout(() => {
    displayCourses(courses);
}, 1000);
