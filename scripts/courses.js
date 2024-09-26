const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming...',
      technology: ['Python'],
      completed: true
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
      completed: true
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
      completed: false
  }
];

function calculateTotalCredits() {
  return courses.reduce((total, course) => total + course.credits, 0);
}

function renderCourseList(coursesToRender) {
  const courseListDiv = document.querySelector('.course-list');
  courseListDiv.innerHTML = ''; // Clear list

  coursesToRender.forEach(course => {
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

function markCourseAsCompleted(subject, number) {
  const course = courses.find(course => course.subject === subject && course.number === number);
  if (course) {
      course.completed = true;
      renderCourseList(courses); // Re-render the list after update
      alert(`${course.title} has been marked as completed!`); // User feedback
  }
}

// Function to sort courses
function sortCourses(criterion) {
  let sortedCourses;
  if (criterion === 'subject') {
      sortedCourses = [...courses].sort((a, b) => a.subject.localeCompare(b.subject));
  } else if (criterion === 'number') {
      sortedCourses = [...courses].sort((a, b) => a.number - b.number);
  } else if (criterion === 'credits') {
      sortedCourses = [...courses].sort((a, b) => a.credits - b.credits);
  } else {
      sortedCourses = courses; // Default case, no sorting
  }
  return sortedCourses;
}

// Event listener for buttons
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-btn')) {
      const subject = event.target.dataset.subject;
      const number = parseInt(event.target.dataset.number);
      markCourseAsCompleted(subject, number);
  }
});

// Search functionality
document.querySelector('#search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(query) || 
      course.subject.toLowerCase().includes(query)
  );
  renderCourseList(filteredCourses);
});

// Filter completed courses
document.querySelector('#filter-completed').addEventListener('click', function() {
  const completedCourses = courses.filter(course => course.completed);
  renderCourseList(completedCourses);
});

// Sorting functionality
document.querySelector('#sort-options').addEventListener('change', function() {
  const selectedOption = this.value;
  const sortedCourses = sortCourses(selectedOption);
  renderCourseList(sortedCourses);
});

// On DOM load, render the full course list
document.addEventListener('DOMContentLoaded', () => {
  renderCourseList(courses);
});
