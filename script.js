const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true // Change to true if completed
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
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
        technology: ['Python'],
        completed: true // Change to true if completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Change to true if completed
    }
];

// Function to display courses
function displayCourses(filter = null) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    const filteredCourses = filter ? courses.filter(course => course.subject === filter) : courses;

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        totalCredits += course.credits; // Calculate total credits

        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed'); // Mark completed courses
        }

        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseList.appendChild(courseCard);
    });

    document.getElementById('total-credits').innerText = totalCredits; // Update total credits
}

// Event listeners for buttons
document.getElementById('show-all').addEventListener('click', () => displayCourses());
document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));

// Dynamically display current year and last modified date
document.getElementById('currentyear').innerText = new Date().getFullYear();
document.getElementById('lastModified').innerText = document.lastModified;

// Initial display of all courses
displayCourses();
