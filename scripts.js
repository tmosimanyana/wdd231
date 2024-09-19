document.addEventListener('DOMContentLoaded', () => {
    // Populate current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified-date').textContent = document.lastModified;

    // Course data
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
            completed: false
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
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
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to dynamic web development technologies including the use of server-side programming languages, client-side scripting, and database integration.',
            technology: ['JavaScript', 'PHP'],
            completed: false
        }
    ];

    const courseList = document.getElementById('course-list');

    function renderCourses(filter) {
        courseList.innerHTML = ''; // Clear existing content
        let totalCredits = 0;

        courses.filter(course => filter === 'all' || course.subject === filter).forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Subject:</strong> ${course.subject}</p>
                <p><strong>Course Number:</strong> ${course.number}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            `;
            courseList.appendChild(courseCard);
            totalCredits += course.completed ? course.credits : 0;
        });

        document.getElementById('total-credits').textContent = totalCredits;
    }

    function filterCourses(filter) {
        renderCourses(filter);
    }

    // Initial render
    renderCourses('all');

    // Navigation toggle for small screens
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-visible');
    });
});
