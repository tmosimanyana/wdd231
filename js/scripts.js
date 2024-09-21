// Get the current year for the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date for the footer
document.getElementById('lastModified').textContent = `Last updated: ${document.lastModified}`;

// Course array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true // Mark completed
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
        completed: true // Mark completed
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

// Function to display courses
function displayCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    const filteredCourses = courses.filter(course => {
        if (filter === 'All') return true;
        return course.subject === filter;
    });

    let totalCredits = 0;
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.textContent = `${course.subject} ${course.number}: ${course.title} - ${course.credits} credits`;
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseList.appendChild(courseCard);
        totalCredits += course.credits;
    });
    document.getElementById('total-credits').textContent = totalCredits;
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    displayCourses('All'); // Display all courses by default

    // Add filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            displayCourses(button.textContent);
        });
    });
});
