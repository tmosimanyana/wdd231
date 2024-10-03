// Course List Array
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

// Load courses from localStorage or initialize
function loadCourses() {
    courses.forEach(course => {
        const storedCourse = localStorage.getItem(`course_${course.number}`);
        if (storedCourse) {
            course.completed = JSON.parse(storedCourse).completed; // Update from localStorage
        }
    });
}

// Display courses
function displayCourses() {
    const coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing content

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course ${course.completed ? 'completed' : ''}`;
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <button class="toggle-complete" data-number="${course.number}">${course.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
        `;
        coursesContainer.appendChild(courseCard);
    });

    updateTotalCredits(); // Update total credits displayed
    updateTotalCreditsRequired(); // Update total credits required
}

// Update total credits earned dynamically
function updateTotalCredits() {
    const totalCreditsEarned = courses.reduce((sum, course) => {
        return sum + (course.completed ? course.credits : 0);
    }, 0);
    
    document.getElementById('total-credits-earned').textContent = `Total Credits Earned: ${totalCreditsEarned}`;
}

// Update total credits required dynamically
function updateTotalCreditsRequired() {
    const totalCreditsRequired = courses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('credits-required').textContent = totalCreditsRequired;
}

// Toggle course completion
function toggleCourseCompletion(courseNumber) {
    const course = courses.find(c => c.number === courseNumber);
    if (course) {
        course.completed = !course.completed; // Toggle completion
        localStorage.setItem(`course_${course.number}`, JSON.stringify(course)); // Save updated course to localStorage
        displayCourses(); // Refresh the displayed courses
    }
}

// Filter courses
function filterCourses(filter) {
    const filteredCourses = courses.filter(course => {
        return filter === 'all' || course.subject === filter;
    });
    
    const coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing content
    
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course ${course.completed ? 'completed' : ''}`;
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <button class="toggle-complete" data-number="${course.number}">${course.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
        `;
        coursesContainer.appendChild(courseCard);
    });

    updateTotalCredits(); // Update total credits earned dynamically
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    displayCourses();

    document.querySelector('.courses').addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-complete')) {
            const courseNumber = parseInt(e.target.dataset.number);
            toggleCourseCompletion(courseNumber);
        }
    });

    document.getElementById('filter-all').addEventListener('click', () => filterCourses('all'));
    document.getElementById('filter-cse').addEventListener('click', () => filterCourses('CSE'));
    document.getElementById('filter-wdd').addEventListener('click', () => filterCourses('WDD'));

    // Current Year and Last Modified Date
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString();
});
