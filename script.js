// Display the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date in the footer
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// data array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
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
        completed: true
    }
];

// Display courses dynamically
const courseList = document.querySelector('.course-list');
let totalCredits = 0;

courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.className = 'course-item' + (course.completed ? ' completed' : '');
    courseItem.textContent = `${course.title} - ${course.credits} credits`;
    courseList.appendChild(courseItem);
    if (course.completed) {
        totalCredits += course.credits;
    }
});

// Update total credits
document.getElementById('total-credits').textContent = totalCredits;
