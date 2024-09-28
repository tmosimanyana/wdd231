const courses = [
    {
        subject: 'CSE',
        title: 'Introduction to Programming',
        credits: 2,
        completed: true,
    },
    {
        subject: 'WDD',
        title: 'Web Fundamentals',
        credits: 2,
        completed: false,
    },
    {
        subject: 'CSE',
        title: 'Programming with Functions',
        credits: 2,
        completed: true,
    },
    {
        subject: 'WDD',
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true,
    },
    {
        subject: 'CSE',
        title: 'Web Development I',
        credits: 3,
        completed: false,
    },
    // Add more courses as necessary
];

const totalRequiredCredits = courses.reduce((acc, course) => acc + course.credits, 0);

function displayCourses(filteredCourses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-subject', course.subject);
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <p class="description">${course.completed ? "Completed" : "Incomplete"}</p>
        `;

        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseList.appendChild(courseCard);
    });

    // Update the total credits and progress bar
    updateCredits(filteredCourses);
}

function updateCredits(courses) {
    const earnedCredits = courses.filter(course => course.completed).reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('earned-credits').textContent = earnedCredits;
    document.getElementById('required-credits').textContent = totalRequiredCredits;

    // Update progress bar with animation
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (earnedCredits / totalRequiredCredits) * 100;
    progressBar.style.width = progressPercentage + '%'; // Set the width of the progress bar
}

// Function to filter courses based on the subject
function filterCourses(subject) {
    if (subject === 'all') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.subject === subject);
        displayCourses(filteredCourses);
    }
}

// Initial display of all courses
displayCourses(courses);

// Update the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
