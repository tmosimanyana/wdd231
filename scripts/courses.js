const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: ['Python'],
      completed: false
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: ['HTML', 'CSS'],
      completed: false
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write their own functions; and to analyze their programs to understand the role that functions play.',
      technology: ['JavaScript'],
      completed: true
  },
  {
      subject: 'CSE',
      number: 121,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the object-oriented paradigm of programming. Students learn the concepts of classes, objects, inheritance, polymorphism, and encapsulation.',
      technology: ['Java', 'C#'],
      completed: false
  },
  {
      subject: 'CSE',
      number: 131,
      title: 'Introduction to Databases',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'The course introduces the basic concepts of databases and database management systems. It provides a solid foundation for the study of database technology.',
      technology: ['SQL'],
      completed: true
  }
];

const courseListElement = document.querySelector('.course-list');
const totalCreditsElement = document.querySelector('.total-credits');

// Function to render course list
function renderCourses(filter) {
  courseListElement.innerHTML = '';
  let totalCredits = 0;

  courses.forEach(course => {
      if (filter === 'all' || course.subject === filter) {
          const courseCard = document.createElement('div');
          courseCard.classList.add('course-card');
          if (course.completed) {
              courseCard.classList.add('completed');
          }
          courseCard.innerHTML = `
              <h3>${course.title}</h3>
              <p>Credits: ${course.credits}</p>
              <p>Completed: ${course.completed ? 'Yes' : 'No'}</p>
          `;
          courseListElement.appendChild(courseCard);
          totalCredits += course.credits;
      }
  });

  totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      renderCourses(filter);
  });
});

// Initial render
renderCourses('all');
