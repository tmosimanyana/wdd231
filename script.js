const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true // Change to true if completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: false // Change to true if completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful programmers.',
        technology: ['Python'],
        completed: true // Change to true if completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: false // Change to true if completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // Change to true if completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience and performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Change to true if completed
    }
];

// Display courses on page load
document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses);
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});

// Function to display courses
function displayCourses(courseList) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = ''; // Clear existing courses
    let totalCredits = 0;

    courseList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card' + (course.completed ? ' completed' : '');
        courseCard.innerHTML = `
            <h2>${course.title} (${course.subject} ${course.number})</h2>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;
        coursesContainer.appendChild(courseCard);
        if (course.completed) totalCredits += course.credits;
    });

    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses
function filterCourses(filter) {
    let filteredCourses;
    if (filter === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === filter);
    }
    displayCourses(filteredCourses);
}
