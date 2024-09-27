// Current Year in Footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Last Modified Date in Footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Course List Data
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
    description: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course teaches students to become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects, encapsulation, inheritance, and polymorphism.',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focuses on user experience, accessibility, compliance, performance optimization, and basic API usage.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

// Function to display courses dynamically
function displayCourses(filter = 'all') {
  const coursesContainer = document.getElementById('courses-container');
  coursesContainer.innerHTML = '';

  let filteredCourses = courses;
  if (filter === 'CSE') {
    filteredCourses = courses.filter(course => course.subject === 'CSE');
  } else if (filter === 'WDD') {
    filteredCourses = courses.filter(course => course.subject === 'WDD');
  }

  filteredCourses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = course.completed ? 'course-card completed' : 'course-card';
    courseCard.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p>${course.description}</p>
      <p>Credits: ${course.credits}</p>
      <p>Technology: ${course.technology.join(', ')}</p>
    `;
    coursesContainer.appendChild(courseCard);
  });

  // Dynamically display total credits
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById('total-credits').textContent = totalCredits;
}

// Event Listeners for Filter Buttons
document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));

// Initial load of all courses
displayCourses();
