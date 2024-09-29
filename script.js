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

const coursesContainer = document.querySelector('.courses');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');

function renderCourses(filter = 'All') {
    coursesContainer.innerHTML = '';
    const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.credits} credits</p>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

allButton.addEventListener('click', () => renderCourses('All'));
cseButton.addEventListener('click', () => renderCourses('CSE'));
wddButton.addEventListener('click', () => renderCourses('WDD'));

// Initial render
renderCourses();

// Update last modified date
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
