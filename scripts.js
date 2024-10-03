// Course List Array
const courses = [
  { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: false },
  { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: false },
  { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
  { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
  { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
  { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// Load courses from localStorage or initialize
function loadCourses() {
  courses.forEach(course => {
      const storedCourse = localStorage.getItem(`course_${course.number}`);
      if (storedCourse) {
          course.completed = JSON.parse(storedCourse).completed; // Update from localStorage
      }
  });
}

// Display courses
function displayCourses() {
  const coursesContainer = document.querySelector('.courses');
  coursesContainer.innerHTML = ''; // Clear existing content

  courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = `course ${course.completed ? 'completed' : ''}`;
      courseCard.innerHTML = `
          <h3>${course.subject} ${course.number}: ${course.title}</h3>
          <p>Credits: ${course.credits}</p>
          <button class="toggle-complete" data-number="${course.number}">${course.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
      `;
      coursesContainer.appendChild(courseCard);
  });

  updateTotalCredits(); // Update total credits displayed
}

// Update total credits dynamically
function updateTotalCredits() {
  const totalCredits = courses.reduce((sum, course) => {
      return sum + (course.completed ? course.credits : 0);
  }, 0);
  
  document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Toggle course completion
function toggleCourseCompletion(courseNumber) {
  const course = courses.find(c => c.number === courseNumber);
  if (course) {
      course.completed = !course.completed; // Toggle completion
      localStorage.setItem(`course_${course.number}`, JSON.stringify(course)); // Save updated course
      displayCourses(); // Update UI to reflect changes
  }
}

// Filter courses
function filterCourses(filter) {
  const filteredCourses = courses.filter(course => {
      if (filter === 'CSE') return course.subject === 'CSE';
      if (filter === 'WDD') return course.subject === 'WDD';
      return true; // Show all courses
  });
  const coursesContainer = document.querySelector('.courses');
  coursesContainer.innerHTML = ''; // Clear existing content

  filteredCourses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = `course ${course.completed ? 'completed' : ''}`;
      courseCard.innerHTML = `
          <h3>${course.subject} ${course.number}: ${course.title}</h3>
          <p>Credits: ${course.credits}</p>
          <button class="toggle-complete" data-number="${course.number}">${course.completed ? 'Mark as Incomplete' : 'Mark as Completed'}</button>
      `;
      coursesContainer.appendChild(courseCard);
  });

  updateTotalCredits(); // Update total credits displayed
}

// Event listeners for completion buttons
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('toggle-complete')) {
      const courseNumber = parseInt(e.target.dataset.number);
      toggleCourseCompletion(courseNumber);
  }

  // Filter buttons
  if (e.target.id === 'filter-cse') {
      filterCourses('CSE');
  } else if (e.target.id === 'filter-wdd') {
      filterCourses('WDD');
  } else if (e.target.id === 'filter-all') {
      displayCourses(); // Display all courses
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCourses();
  displayCourses();

  // Update current year and last modified date
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
});
