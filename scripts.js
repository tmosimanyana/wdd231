const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true,
        description: 'This course will introduce students to programming...'
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true,
        description: 'This course introduces students to the World Wide Web...'
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true,
        description: 'CSE 111 students become more organized...'
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false,
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...'
    },
    // Add more courses as needed
];

function displayCourses(filter = 'all') {
    const courseContainer = document.getElementById('course-container');
    courseContainer.innerHTML = ''; // Clear existing courses

    // Filter courses based on selection
    const filteredCourses = courses.filter(course => {
        if (filter === 'all') return true; // Show all courses
        return course.subject === filter; // Filter by subject
    });

    // Total credits counter
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        // Add 'completed' class if the course is completed
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${course.description}</p>
        `;
        courseContainer.appendChild(card);

        // Add to total credits if course is completed
        if (course.completed) {
            totalCredits += course.credits;  // Add the course credits if completed
        }
    });

    // Display total credits
    document.getElementById('total-credits').textContent = totalCredits;
}

// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Initial call to display all courses
displayCourses('all');
