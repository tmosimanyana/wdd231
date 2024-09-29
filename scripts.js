// Get reference to the credits display (add a new HTML element to show this in the certificate section)
const creditsDisplay = document.createElement('p');
creditsDisplay.classList.add('credits-total');
document.querySelector('.certificate').appendChild(creditsDisplay);

// Function to render courses dynamically and calculate total credits
function renderCourses(filter = 'All') {
    // Filter the courses based on the selected filter
    let filteredCourses = courses.filter(course => {
        return filter === 'All' || course.subject === filter;
    });

    // Calculate the total credits using reduce
    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    // Update the UI to display total credits
    creditsDisplay.textContent = `Total Credits: ${totalCredits}`;

    // Clear the previous course cards
    courseContainer.innerHTML = '';

    // Render each course card
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.classList.add(course.completed ? 'completed' : 'uncompleted'); // Apply appropriate class based on completion status
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseContainer.appendChild(courseCard);
    });
}

// Initial render with all courses
renderCourses();

// Event listeners for the filter buttons
document.getElementById('all').addEventListener('click', () => renderCourses('All'));
document.getElementById('cse').addEventListener('click', () => renderCourses('CSE'));
document.getElementById('wdd').addEventListener('click', () => renderCourses('WDD'));
