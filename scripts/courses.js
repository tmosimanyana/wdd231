// Define the courses array with course objects
const courses = [
  { id: 'CSE110', name: 'Introduction to Programming', credits: 3, category: 'CSE', completed: true },
  { id: 'WDD130', name: 'Web Fundamentals', credits: 4, category: 'WDD', completed: true },
  { id: 'CSE111', name: 'Programming with Functions', credits: 3, category: 'CSE', completed: false },
  { id: 'WDD230', name: 'Dynamic Web Development', credits: 4, category: 'WDD', completed: false }
];

// Function to display courses based on filter
function displayCourses(filter = 'all') {
  const courseList = document.querySelector('.course-list');
  courseList.innerHTML = ''; // Clear previous content
  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);
  
  filteredCourses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-item');
    courseElement.textContent = `${course.name} (${course.credits} credits)`;
    
    // Mark completed courses visually
    if (course.completed) {
      courseElement.classList.add('completed');
    }
    
    courseList.appendChild(courseElement);
  });
  
  // Display total credits
  const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
  document.querySelector('.total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Filter button event listeners
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    displayCourses(filter);
  });
});

// Initial load
displayCourses();
