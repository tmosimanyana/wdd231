// dynamicContent.js

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true // Mark as completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true // Mark as completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true // Mark as completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true // Mark as completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true // Mark as completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];

function renderCourses(filter = 'all') {
    const courseListContainer = document.querySelector('.course-list');
    courseListContainer.innerHTML = ''; // Clear existing content

    const filteredCourses = courses.filter(course =>
        filter === 'all' || course.subject === filter
    );

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Add class for completed courses
        if (course.completed) {
            courseCard.classList.add('completed');
            courseCard.style.backgroundColor = '#d4edda'; // Light green for completed courses
            courseCard.style.borderColor = '#c3e6cb'; // Border color for completed courses
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
        `;
        courseListContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    // Display total credits
    const totalCreditsElement = document.createElement('div');
    totalCreditsElement.innerHTML = `<strong>Total Credits:</strong> ${totalCredits}`;
    courseListContainer.appendChild(totalCreditsElement);
}

// Filter functionality
document.getElementById('filter-all').addEventListener('click', () => {
    renderCourses('all');
});

document.getElementById('filter-cse').addEventListener('click', () => {
    renderCourses('CSE');
});

document.getElementById('filter-wdd').addEventListener('click', () => {
    renderCourses('WDD');
});

// Initial render
renderCourses();

// Set the current year and last modified date dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
