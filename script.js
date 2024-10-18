// Course List Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to write and call their own functions and handle errors within functions. Students write programs to solve problems in many disciplines, including business, science, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level and work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Select DOM elements
const courseList = document.getElementById('course-list');
const totalCreditsSpan = document.getElementById('total-credits');
const showAllBtn = document.getElementById('show-all');
const showWDDBtn = document.getElementById('show-wdd');
const showCSEBtn = document.getElementById('show-cse');

// Function to render courses on the page
function renderCourses(filter = 'all') {
    courseList.innerHTML = ''; // Clear the course list
    let totalCredits = 0;

    courses.forEach(course => {
        // Apply filter
        if (filter === 'WDD' && course.subject !== 'WDD') return;
        if (filter === 'CSE' && course.subject !== 'CSE') return;

        // Create the course card
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');

        // Add course information to the card
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
        `;

        // Append course card to the course list
        courseList.appendChild(courseCard);

        // Update total credits for completed courses
        if (course.completed) {
            totalCredits += course.credits;
        }
    });

    // Update the total credits display
    totalCreditsSpan.textContent = totalCredits;
}

// Event listeners for the filter buttons
showAllBtn.addEventListener('click', () => renderCourses('all'));
showWDDBtn.addEventListener('click', () => renderCourses('WDD'));
showCSEBtn.addEventListener('click', () => renderCourses('CSE'));

// Render all courses by default when the page loads
renderCourses('all');

// Display current year and last modified date in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
