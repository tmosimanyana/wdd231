const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: false // Initially set to false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: false // Initially set to false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

function toggleCourseCompletion(index) {
    courses[index].completed = !courses[index].completed; // Toggle the completed status
    displayCourses(); // Re-display the courses to reflect the changes
}

function displayCourses() {
    const courseListContainer = document.getElementById("course-list");
    courseListContainer.innerHTML = ""; // Clear existing content

    courses.forEach((course, index) => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        // Create course title and description
        courseDiv.innerHTML = `
            <h4>${course.title} (Credits: ${course.credits})</h4>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technology:</strong> ${course.technology.join(", ")}</p>
            <p><strong>Status:</strong> ${course.completed ? "Completed" : "Not Completed"}</p>
            <button onclick="toggleCourseCompletion(${index})">${course.completed ? "Mark as Not Completed" : "Mark as Completed"}</button>
        `;

        // Change background color based on completion status
        if (course.completed) {
            courseDiv.classList.add("completed");
        }

        courseListContainer.appendChild(courseDiv);
    });

    calculateCredits(); // Recalculate credits after displaying courses
}

function calculateCredits() {
    const totalCreditsRequired = courses.length * 2; // Assuming each course is worth 2 credits
    const totalCreditsEarned = courses.filter(course => course.completed).reduce((total, course) => total + course.credits, 0);

    document.getElementById("total-credits-required").innerText = totalCreditsRequired;
    document.getElementById("total-credits-earned").innerText = totalCreditsEarned;
}

// Call the displayCourses function when the page loads
window.onload = function() {
    displayCourses();
};
