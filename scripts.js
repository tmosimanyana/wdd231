// Course List Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to web design and development.',
        technology: ['HTML', 'CSS'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students learn to write, call, debug, and test their own functions.',
        technology: ['Python'],
        completed: true // Completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects.',
        technology: ['C#'],
        completed: true // Completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Not completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Not completed
    }
];

// Dynamically display courses
const coursesContainer = document.getElementById('courses-container');
courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
    courseCard.innerHTML = `
        <h3>${course.title} (${course.subject} ${course.number})</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p>${course.description}</p>
    `;
    coursesContainer.appendChild(courseCard);
});

// Dynamically output the current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
