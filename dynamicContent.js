// dynamicContent.js

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
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
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

        if (course.completed) {
            courseCard.classList.add('completed');
            courseCard.style.backgroundColor = '#d4edda'; // Completed color
        } else {
            courseCard.classList.add('incomplete');
            courseCard.style.backgroundColor = '#f8d7da'; // Incomplete color
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseListContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    // Update total credits display
    document.querySelector('#totalCredits').textContent = totalCredits;
}

// Filter button event listeners
document.getElementById('filter-all').addEventListener('click', () => renderCourses('all'));
document.getElementById('filter-cse').addEventListener('click', () => renderCourses('CSE'));
document.getElementById('filter-wdd').addEventListener('click', () => renderCourses('WDD'));

// Initialize default view
renderCourses();

// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
