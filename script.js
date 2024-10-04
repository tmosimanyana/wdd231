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
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true
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

// Function to display courses in the course container
function displayCourses(courseList) {
    const courseContainer = document.getElementById('courses-container');
    courseContainer.innerHTML = '';

    courseList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.textContent = `${course.subject} ${course.number}`;
        courseCard.addEventListener('click', () => {
            alert(`Course: ${course.title}\nCredits: ${course.credits}\nCompleted: ${course.completed}`);
        });
        courseContainer.appendChild(courseCard);
    });
}

// Filter courses based on subject
function filterCourses(subject) {
    if (subject === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
}

// Display total credits and last updated date
window.onload = function () {
    const totalCreditsRequired = courses.reduce((total, course) => total + course.credits, 0);
    const totalCreditsEarned = courses.reduce((total, course) => total + (course.completed ? course.credits : 0), 0);

    document.getElementById('total-credits-required').textContent = totalCreditsRequired;
    document.getElementById('total-credits-earned').textContent = totalCreditsEarned;
    document.getElementById('last-updated').textContent = new Date().toLocaleString();

    displayCourses(courses);  // Display all courses by default
};
