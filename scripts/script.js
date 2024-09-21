document.addEventListener('DOMContentLoaded', () => {
    // Toggle the hamburger menu on small screens
    document.querySelector('.hamburger').addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('show');
    });

    // Dynamically output the current year in the footer
    const yearElement = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Dynamically output the last modified date in the footer
    const lastModifiedElement = document.querySelector('.last-modified');
    lastModifiedElement.textContent = document.lastModified;

    // Array of course objects with completed statuses updated
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to programming.',
            technology: ['Python'],
            completed: true // Completed
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web.',
            technology: ['HTML', 'CSS'],
            completed: true // Completed
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Learn to write and debug functions.',
            technology: ['Python'],
            completed: true // Completed
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Introduces classes and objects.',
            technology: ['C#'],
            completed: true // Completed
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Create dynamic websites using JavaScript.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true // Completed
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Focus on user experience and API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false // Not completed
        }
    ];

    // Function to dynamically display courses
    function displayCourses(courseList) {
        const courseSection = document.querySelector('.course-buttons');
        courseSection.innerHTML = ''; // Clear previous content

        courseList.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <h3>${course.subject} ${course.number} - ${course.title}</h3>
                <p>${course.description}</p>
                <p>Credits: ${course.credits}</p>
            `;

            // Apply different style for completed courses
            if (course.completed) {
                courseCard.classList.add('completed-course');
            } else {
                courseCard.classList.add('incomplete-course');
            }

            courseSection.appendChild(courseCard);
        });
    }

    // Filter courses by subject (CSE, WDD, or all)
    function filterCourses(subject) {
        if (subject === 'all') {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.subject === subject);
            displayCourses(filteredCourses);
        }
    }

    // Buttons to filter courses
    const allButton = document.createElement('button');
    allButton.textContent = 'Show All Courses';
    allButton.addEventListener('click', () => filterCourses('all'));
    
    const cseButton = document.createElement('button');
    cseButton.textContent = 'Show CSE Courses';
    cseButton.addEventListener('click', () => filterCourses('CSE'));
    
    const wddButton = document.createElement('button');
    wddButton.textContent = 'Show WDD Courses';
    wddButton.addEventListener('click', () => filterCourses('WDD'));

    const courseButtonsDiv = document.querySelector('.course-buttons');
    courseButtonsDiv.appendChild(allButton);
    courseButtonsDiv.appendChild(cseButton);
    courseButtonsDiv.appendChild(wddButton);

    // Display total credits required using reduce
    const totalCredits = courses.reduce((total, course) => total + (course.completed ? course.credits : 0), 0);
    const totalCreditsDiv = document.querySelector('.total-credits');
    totalCreditsDiv.textContent = `Total Credits Earned: ${totalCredits}`;
    
    // Initially display all courses
    displayCourses(courses);
});
