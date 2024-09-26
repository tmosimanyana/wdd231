// Course List Array
const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      completed: true
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      completed: true
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      completed: false
  },
];

// Function to display courses
function displayCourses(filter = 'All') {
  const courseContainer = document.querySelector('.course-list');
  courseContainer.innerHTML = '';

  const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.subject === filter);

  filteredCourses.forEach(course => {
      const courseBtn = document.createElement('button');
      courseBtn.classList.add('course-btn');
      if (course.completed) {
          courseBtn.classList.add('completed');
      }
      courseBtn.textContent = `${course.subject} ${course.number} - ${course.title}`;
      courseContainer.appendChild(courseBtn);
  });

  // Update total credits
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  document.querySelector('.total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.filter-btn.all').addEventListener('click', () => displayCourses('All'));
  document.querySelector('.filter-btn.cse').addEventListener('click', () => displayCourses('CSE'));
  document.querySelector('.filter-btn.wdd').addEventListener('click', () => displayCourses('WDD'));

  // Initial display of all courses
  displayCourses('All');
  
  // Set the current year
  const yearSpan = document.querySelector('#current-year');
  yearSpan.textContent = new Date().getFullYear();

  // Set the last modified date
  const lastModifiedSpan = document.querySelector('#last-modified');
  lastModifiedSpan.textContent = document.lastModified;
});
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
