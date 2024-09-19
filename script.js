// Array of courses with updated completion status
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to write, call, debug, and test functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the notion of classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience and API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    }
];

// Function to display the courses dynamically
function displayCourses(filteredCourses = courses) {
    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = ''; // Clear previous content

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');

        // Apply different styles for completed courses
        if (course.completed) {
            courseElement.classList.add('completed');
        }

        courseElement.innerHTML = `
            <h2>${course.subject} ${course.number}: ${course.title}</h2>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        courseContainer.appendChild(courseElement);
    });

    // Update total credits
    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses
function filterCourses(subject) {
    if (subject === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
}

// Event listeners for filter buttons
document.getElementById('show-all').addEventListener('click', () => filterCourses('all'));
document.getElementById('show-cse').addEventListener('click', () => filterCourses('CSE'));
document.getElementById('show-wdd').addEventListener('click', () => filterCourses('WDD'));

// Initial display of all courses
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();

    // Set current year in footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
