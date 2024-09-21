// Set Current Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set Last Modified Date
document.getElementById('last-modified').textContent = document.lastModified;

// Array of courses
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true,
        description: 'Intro to programming using Python.'
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: false,
        description: 'Basic web development with HTML and CSS.'
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: false,
        description: 'Learning to write, call, debug, and test functions in Python.'
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: false,
        description: 'Creating dynamic websites with JavaScript.'
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: false,
        description: 'Introduction to Object-Oriented Programming using classes and inheritance.'
    }
];

// Function to dynamically display courses
function displayCourses(courses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear the current content

    let totalCredits = 0;

    courses.forEach(course => {
        // Create course card
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.classList.add(course.completed ? 'completed' : '');

        // Course content
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;

        // Append course card to list
        courseList.appendChild(courseCard);

        // Add up credits for completed courses
        if (course.completed) {
            totalCredits += course.credits;
        }
    });

    // Update total credits
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Display all courses initially
displayCourses(courses);

// Filter function to show courses by subject
function filterCourses(subject) {
    if (subject === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
}
