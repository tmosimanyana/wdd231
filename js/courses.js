const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true // Change this to true if you have completed the course
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers...',
        technology: ['Python'],
        completed: true // Change this to true if you have completed the course
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true // Change this to true if you have completed the course
    }
];
function displayCourses(filter) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear existing courses

    const filteredCourses = courses.filter(course => {
        return filter === 'All' || course.subject === filter;
    });

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-box');
        if (course.completed) {
            courseCard.classList.add('completed-course'); // Style for completed courses
        }

        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
        `;

        courseList.appendChild(courseCard);
    });

    updateTotalCredits();
}

function updateTotalCredits() {
    const totalCredits = courses.reduce((total, course) => {
        return total + (course.completed ? course.credits : 0);
    }, 0);
    document.getElementById('total-credits').innerText = `Total Credits: ${totalCredits}`;
}

// Initial display of all courses
displayCourses('All');

// Add event listeners for filtering buttons
document.querySelector('button[onclick="filterCourses(\'All\')"]').addEventListener('click', () => displayCourses('All'));
document.querySelector('button[onclick="filterCourses(\'CSE\')"]').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('button[onclick="filterCourses(\'WDD\')"]').addEventListener('click', () => displayCourses('WDD'));
