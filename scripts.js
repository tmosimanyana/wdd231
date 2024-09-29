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

const coursesContainer = document.querySelector('.courses');
const totalCreditsRequiredElem = document.getElementById('totalCreditsRequired');
const creditsEarnedElem = document.getElementById('creditsEarned');
const progressBarElem = document.getElementById('progressBar');
const allButton = document.getElementById('all');
const cseButton = document.getElementById('cse');
const wddButton = document.getElementById('wdd');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Function to render course cards
function renderCourses(filter = 'All') {
    coursesContainer.innerHTML = '';
    const filteredCourses = courses.filter(course => filter === 'All' || course.subject === filter);

    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);
    const earnedCredits = filteredCourses.reduce((acc, course) => course.completed ? acc + course.credits : acc, 0);

    totalCreditsRequiredElem.textContent = totalCredits;
    creditsEarnedElem.textContent = earnedCredits;

    const progressPercent = totalCredits > 0 ? (earnedCredits / totalCredits) * 100 : 0;
    progressBarElem.style.width = `${progressPercent}%`;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');

        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.subject} ${course.number}</p>
            <p>${course.credits} credits</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
        `;

        coursesContainer.appendChild(courseCard);
    });
}

// Event listeners for filter buttons
allButton.addEventListener('click', () => renderCourses('All'));
cseButton.addEventListener('click', () => renderCourses('CSE'));
wddButton.addEventListener('click', () => renderCourses('WDD'));

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

// Initial render
renderCourses();
