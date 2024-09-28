document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        { subject: 'CSE', title: 'Introduction to Programming', credits: 2, completed: true },
        { subject: 'WDD', title: 'Web Fundamentals', credits: 2, completed: false },
        { subject: 'CSE', title: 'Programming with Functions', credits: 2, completed: true },
        { subject: 'WDD', title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
        { subject: 'CSE', title: 'Web Development I', credits: 3, completed: false },
    ];

    const totalRequiredCredits = courses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('required-credits').innerText = totalRequiredCredits;

    // Function to display courses
    function displayCourses(filteredCourses) {
        const courseList = document.getElementById('course-list');
        courseList.innerHTML = ''; // Clear previous content

        let earnedCredits = 0; // Track earned credits

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.setAttribute('data-subject', course.subject);
            courseCard.innerHTML = `
                <h3>${course.title}</h3>
                <p>Credits: ${course.credits}</p>
                <p class="description">${course.completed ? "Completed" : "Incomplete"}</p>
            `;

            // Apply completed class
            if (course.completed) {
                courseCard.classList.add('completed');
                earnedCredits += course.credits; // Count earned credits
            }

            courseList.appendChild(courseCard);
        });

        // Update the total credits and progress bar
        updateCredits(earnedCredits);
    }

    // Function to filter courses based on the subject
    window.filterCourses = function(subject) {
        let filteredCourses;
        if (subject === 'all') {
            filteredCourses = courses; // Display all courses
        } else {
            filteredCourses = courses.filter(course => course.subject === subject);
        }
        displayCourses(filteredCourses);
    }

    // Function to update credits and progress bar
    function updateCredits(earnedCredits) {
        document.getElementById('earned-credits').innerText = earnedCredits;
        const progress = (earnedCredits / totalRequiredCredits) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    // Initial display of all courses
    displayCourses(courses);

    // Set the current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;
    document.getElementById('last-modified').innerText = document.lastModified;
});
