// Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        description: 'Learn the basics of programming using Python.',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        description: 'Learn HTML and CSS for building basic websites.',
        completed: false
    },
    {
        subject: 'CSE',
        number: 220,
        title: 'Advanced Programming',
        credits: 3,
        description: 'Advanced concepts in object-oriented programming.',
        completed: false
    },
    {
        subject: 'WDD',
        number: 230,
        title: 'JavaScript for Web Development',
        credits: 3,
        description: 'Learn JavaScript to create dynamic and interactive web pages.',
        completed: true
    }
];

// Function to display courses dynamically
function displayCourses(filteredCourses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';  // Clear any previous content

    // Create list items for each course
    filteredCourses.forEach(course => {
        const li = document.createElement('li');
        li.innerHTML = `${course.subject} ${course.number}: ${course.title} - ${course.credits} Credits <br>${course.description}`;
        
        // Add CSS class based on completion status
        li.classList.add(course.completed ? 'completed' : 'not-completed');
        
        courseList.appendChild(li);
    });
}

// Function to filter courses by subject
function filterCourses(subject) {
    let filteredCourses;

    // Filter courses based on subject
    if (subject === 'all') {
        filteredCourses = courses;  // Show all courses
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }

    // Display filtered courses
    displayCourses(filteredCourses);
}

// Display all courses when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayCourses(courses);
});

// Dynamically update the footer with the current date
document.getElementById('last-updated').textContent = document.lastModified;
