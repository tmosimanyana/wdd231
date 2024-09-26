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
