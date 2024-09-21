// courses.js
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
        completed: true
    }
];

// Display Courses
function displayCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    const filteredCourses = courses.filter(course => {
        if (filter === 'All') return true;
        return course.subject === filter;
    });

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.textContent = `${course.subject} ${course.number} - ${course.title} - ${course.credits} credits`;
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseList.appendChild(courseCard);
    });

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    const totalCreditsElement = document.createElement('div');
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    courseList.appendChild(totalCreditsElement);
}

// Event Listeners for Filter Buttons
document.addEventListener('DOMContentLoaded', () => {
    displayCourses('All'); // Display all courses by default

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            displayCourses(button.textContent);
        });
    });

    // Display current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last updated: ${document.lastModified}`;
});
