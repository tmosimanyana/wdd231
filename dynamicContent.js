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

// Function to render courses in both sections
function renderCourses(filter = 'all') {
    const courseListContainer = document.querySelector('.course-list');
    const certificateCourseListContainer = document.querySelector('.certificate-course-list');
    
    courseListContainer.innerHTML = ''; // Clear existing content in the course work section
    certificateCourseListContainer.innerHTML = ''; // Clear existing content in the certificate section

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
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
        `;
        courseListContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    // Display total credits in the course work section
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

// Initial render for all courses
renderCourses();

// Set the current year and last modified date dynamically
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `${currentYear}`;
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
