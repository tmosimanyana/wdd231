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
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
      technology: ['HTML', 'CSS'],
      completed: false
  },
  // other courses...
];

function calculateTotalCredits() {
  return courses.reduce((total, course) => total + course.credits, 0);
}

function renderCourseList() {
  const courseListDiv = document.querySelector('.course-list');
  courseListDiv.innerHTML = ''; // Clear list

  courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course-card');
      if (course.completed) {
          courseDiv.classList.add('completed');
      }

      courseDiv.innerHTML = `
          <h3>${course.subject} ${course.number}: ${course.title}</h3>
          <p>${course.description}</p>
          <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
          <p><strong>Credits:</strong> ${course.credits}</p>
          <button class="complete-btn" data-subject="${course.subject}" data-number="${course.number}">Mark as Completed</button>
      `;
      courseListDiv.appendChild(courseDiv);
  });

  document.querySelector('.total-credits').textContent = `Total Credits: ${calculateTotalCredits()}`;
}

// Mark course as completed function
function markCourseAsCompleted(subject, number) {
  const course = courses.find(course => course.subject === subject && course.number === number);
  if (course) {
      course.completed = true;
      renderCourseList(); // Re-render the list after update
  }
}

// Event listener for buttons
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-btn')) {
      const subject = event.target.dataset.subject;
      const number = parseInt(event.target.dataset.number);
      markCourseAsCompleted(subject, number);
  }
});

// On DOM load, render course list
document.addEventListener('DOMContentLoaded', renderCourseList);
