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
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript.',
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

// Function to display courses
function displayCourses() {
    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = ''; // Clear existing courses

    courses.forEach(course => {
        const courseBox = document.createElement('div');
        courseBox.className = `course-box ${course.subject.toLowerCase()}`;
        courseBox.setAttribute('data-credits', course.credits);
        courseBox.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Subject:</strong> ${course.subject} ${course.number}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p class="status">${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseGrid.appendChild(courseBox);
    });

    displayTotalCredits(); // Call to update total credits display
}

// Function to display total credits earned and required
function displayTotalCredits() {
    const totalCreditsRequired = courses.reduce((acc, course) => acc + course.credits, 0);
    const totalCreditsEarned = courses.filter(course => course.completed).reduce((acc, course) => acc + course.credits, 0);
    const totalCourses = courses.length;
    const completedCourses = courses.filter(course => course.completed).length;
    const progressPercentage = ((completedCourses / totalCourses) * 100).toFixed(2); // Calculate progress percentage

    const totalCreditsDisplay = document.getElementById('total-credits');
    totalCreditsDisplay.innerHTML = `
        <p><strong>Total Credits Required:</strong> ${totalCreditsRequired}</p>
        <p><strong>Total Credits Earned:</strong> ${totalCreditsEarned}</p>
        <p><strong>Progress Percentage:</strong> ${progressPercentage}%</p>
    `;
}

// Filter Courses
document.getElementById("all-btn").addEventListener("click", function() {
    showAllCourses();
});

document.getElementById("cse-btn").addEventListener("click", function() {
    showCourses('cse');
});

document.getElementById("wdd-btn").addEventListener("click", function() {
    showCourses('wdd');
});

// Function to show all courses
function showAllCourses() {
    let courses = document.querySelectorAll('.course-box');
    courses.forEach(course => {
        course.style.display = 'block';
    });
}

// Function to show specific courses
function showCourses(courseType) {
    let courses = document.querySelectorAll('.course-box');
    courses.forEach(course => {
        if (course.classList.contains(courseType)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Animate the image on button click
document.getElementById("animate-btn").addEventListener("click", function() {
    const img = document.getElementById("profile-image");
    
    // Add the animate class to trigger the scale effect
    img.style.transform = 'scale(1.1)';

    // Return to original size after 0.5 seconds
    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 500); // Matches the CSS transition duration
});

// Initial display of courses
displayCourses();
