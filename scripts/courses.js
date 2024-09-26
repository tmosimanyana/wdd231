const courses = [
  { code: 'CSE 110', title: 'Intro to Programming', category: 'CSE', credits: 3, completed: true },
  { code: 'WDD 130', title: 'Web Design I', category: 'WDD', credits: 3, completed: false },
  { code: 'CSE 210', title: 'Data Structures', category: 'CSE', credits: 3, completed: true },
  { code: 'WDD 131', title: 'Web Design II', category: 'WDD', credits: 3, completed: false }
];

const totalCreditsRequired = courses.reduce((sum, course) => sum + course.credits, 0);
const courseList = document.querySelector('.course-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCreditsElement = document.querySelector('.total-credits');
const requiredCreditsElement = document.querySelector('.required-credits');

let totalCredits = 0;

// Display all courses by default
displayCourses('all');

// Filter courses by category
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    displayCourses(category);
  });
});

function displayCourses(filter) {
  courseList.innerHTML = '';
  totalCredits = 0;
  courses.forEach(course => {
    if (filter === 'all' || course.category === filter) {
      courseList.innerHTML += `
        <div class="course-card ${course.completed ? 'completed' : ''}">
          <h3>${course.code}</h3>
          <p>${course.title}</p>
          <p>Credits: ${course.credits}</p>
        </div>
      `;
      totalCredits += course.credits;
    }
  });
  totalCreditsElement.textContent = `Total Credits Earned: ${totalCredits}`;
  requiredCreditsElement.textContent = `Total Credits Required: ${totalCreditsRequired}`;
}
