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

// Display the courses in the course list
const courseList = document.getElementById('course-list');
const totalCredits = document.getElementById('total-credits');

// Function to render course list
function renderCourses(filter = null) {
    courseList.innerHTML = ''; // Clear the current list
    let total = 0; // Initialize total credits
    const filteredCourses = filter
        ? courses.filter(course => course.subject === filter)
        : courses;

    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.innerHTML = `<h3>${course.title} (${course.subject} ${course.number})</h3>
                                <p><strong>Credits:</strong> ${course.credits}</p>
                                <p>${course.description}</p>`;
        courseList.appendChild(courseItem);
        total += course.credits; // Accumulate total credits
    });

    totalCredits.textContent = total; // Update total credits display
}

// Initial render of all courses
renderCourses();

// Event listeners for filter buttons
document.getElementById('show-all').addEventListener('click', () => renderCourses());
document.getElementById('show-wdd').addEventListener('click', () => renderCourses('WDD'));
document.getElementById('show-cse').addEventListener('click', () => renderCourses('CSE'));

// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
