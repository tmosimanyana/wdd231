// scripts.js

// Course data array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true // Change to true if completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: true // Change to true if completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // Change to true if completed
    }
];

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Update the current year
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Update the last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent = document.lastModified;

    // Function to filter courses
    window.filterCourses = function (category) {
        // Clear the current course list
        const courseList = document.getElementById("course-list");
        courseList.innerHTML = "";

        // Filter courses based on category
        const filteredCourses = courses.filter(course => 
            category === 'all' || course.subject === category
        );

        // Display filtered courses
        filteredCourses.forEach(course => {
            const courseItem = document.createElement("div");
            courseItem.className = course.completed ? "course completed" : "course"; // Differentiate completed courses
            courseItem.innerHTML = `
                <h3>${course.title} (${course.subject} ${course.number})</h3>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Certificate:</strong> ${course.certificate}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
                <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
            `;
            courseList.appendChild(courseItem);
        });

        // Update total credits dynamically
        const totalCreditsRequired = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        document.getElementById("required-credits").textContent = totalCreditsRequired;

        // Calculate total credits earned
        const totalCreditsEarned = filteredCourses.filter(course => course.completed).reduce((sum, course) => sum + course.credits, 0);
        document.getElementById("earned-credits").textContent = totalCreditsEarned;

        // Update the progress bar
        const progressBar = document.getElementById("progress-bar");
        const totalCourses = filteredCourses.length;
        const completedCourses = filteredCourses.filter(course => course.completed).length;
        const progressPercentage = totalCourses > 0 ? (completedCourses / totalCourses) * 100 : 0;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute("aria-valuenow", progressPercentage);
        progressBar.querySelector(".tooltip").textContent = `${Math.round(progressPercentage)}% Completed`;
    };

    // Initialize with all courses
    filterCourses('all');
});
