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
        completed: true // Change to true if completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
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
        completed: false
    }
];

// Function to display courses dynamically
function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear existing courses

    let totalCreditsRequired = 0;
    let totalCreditsEarned = 0;

    courseArray.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course-card');
        courseDiv.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Technology: ${course.technology.join(', ')}</p>
        `;
        if (course.completed) {
            courseDiv.classList.add('completed'); // Mark completed courses with a different style
            totalCreditsEarned += course.credits; // Increment earned credits
        }
        totalCreditsRequired += course.credits; // Increment required credits
        courseList.appendChild(courseDiv);
    });

    // Update total credits required and earned dynamically
    document.getElementById('required-credits').innerText = totalCreditsRequired;
    document.getElementById('earned-credits').innerText = totalCreditsEarned;

    // Calculate progress percentage and update the progress bar
    const progressPercentage = (totalCreditsEarned / totalCreditsRequired) * 100;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';
    document.getElementById('progress-bar').querySelector('.tooltip').innerText = `${progressPercentage.toFixed(2)}% Completed`;
}

// Function to filter courses
function filterCourses(subject) {
    let filteredCourses = [];
    if (subject === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    displayCourses(filteredCourses);
}

// Set current year and last modified date
document.getElementById('current-year').innerText = new Date().getFullYear();
document.getElementById('last-modified').innerText = document.lastModified;

// Initial display of all courses
displayCourses(courses);
