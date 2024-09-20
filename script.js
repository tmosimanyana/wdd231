// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dynamically Load Course Work
const courseList = [
  'HTML Basics',
  'CSS Fundamentals',
  'JavaScript Introduction'
];

const courseListEl = document.getElementById('course-list');

courseList.forEach(course => {
  const listItem = document.createElement('li');
  listItem.textContent = course;
  courseListEl.appendChild(listItem);
});

// Filter and Display Courses in Certificate Section
const courses = [
  { code: 'CSE 110', type: 'cse' },
  { code: 'WDD 130', type: 'wdd' },
  { code: 'CSE 111', type: 'cse' },
  { code: 'WDD 231', type: 'wdd' }
];

const coursesEl = document.getElementById('courses');

function displayCourses(filter) {
  coursesEl.innerHTML = ''; // Clear existing courses
  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.type === filter);
  
  filteredCourses.forEach(course => {
    const courseBox = document.createElement('div');
    courseBox.classList.add('course-box', course.type);
    courseBox.textContent = course.code;
    coursesEl.appendChild(courseBox);
  });
}

document.getElementById('all').addEventListener('click', () => displayCourses('all'));
document.getElementById('cse').addEventListener('click', () => displayCourses('cse'));
document.getElementById('wdd').addEventListener('click', () => displayCourses('wdd'));

// Initially display all courses
displayCourses('all');

// Footer - Display Last Updated Date
const footer = document.getElementById('last-updated');
const lastModified = document.lastModified;

footer.textContent = `Last Update: ${lastModified}`;
