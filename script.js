const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses
function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    courseArray.forEach((course, index) => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-card');
        courseDiv.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <label>
                <input type="checkbox" ${course.completed ? 'checked' : ''} onchange="toggleCompletion(${index})">
                Mark as Completed
            </label>
        `;
        if (course.completed) {
            courseDiv.classList.add('completed');
        }
        courseList.appendChild(courseDiv);
    });
}

// Function to toggle completion status
function toggleCompletion(index) {
    courses[index].completed = !courses[index].completed; // Toggle the completed status
    displayCourses(courses); // Refresh the course display
    updateCredits(); // Update total credits earned
}

// Function to filter courses
function filterCourses(subject) {
    const filteredCourses = subject === 'all' ? courses : courses.filter(course => course.subject === subject);
    displayCourses(filteredCourses);
    updateCredits(); // Update credits after filtering
}

// Function to calculate and display total credits
function updateCredits() {
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('required-credits').innerText = totalCredits;
    
    const earnedCredits = courses.filter(course => course.completed).reduce((total, course) => total + course.credits, 0);
    document.getElementById('earned-credits').innerText = earnedCredits;

    const progress = (earnedCredits / totalCredits) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress); // For accessibility
}

// Function to set footer dates
function setFooterDates() {
    document.getElementById('current-year').innerText = new Date().getFullYear();
    document.getElementById('last-modified').innerText = document.lastModified;
}

// Initialize the page
window.onload = function() {
    displayCourses(courses);
    updateCredits();
    setFooterDates();
};
