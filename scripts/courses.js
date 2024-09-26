// Course List Array
const courses = [
    {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to programming and the building blocks of programming languages.',
      technology: ['Python'],
      completed: true // Updated to true as per your progress
    },
    {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to web development fundamentals.',
      technology: ['HTML', 'CSS'],
      completed: true // Updated to true as per your progress
    },
    {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course focuses on writing and calling functions in programming.',
      technology: ['Python'],
      completed: true // Updated to true as per your progress
    },
    {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce classes, encapsulation, inheritance, and polymorphism.',
      technology: ['C#'],
      completed: true // Updated to true as per your progress
    },
    {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Students will learn dynamic web design using JavaScript for responsive experiences.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: true // Updated to true as per your progress
    },
    {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'Focuses on frontend development with accessibility, performance, and API usage.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: false
    }
  ];
  
  // Dynamically generate course content
  function displayCourses(filter = 'All') {
    const courseContainer = document.querySelector('.courses');
    courseContainer.innerHTML = '';
  
    const filteredCourses = filter === 'All' ? courses : courses.filter(course => course.subject === filter);
  
    filteredCourses.forEach(course => {
      const courseBtn = document.createElement('button');
      courseBtn.classList.add('course-btn');
      if (course.completed) {
        courseBtn.classList.add('completed'); // Style completed courses
      }
      courseBtn.textContent = `${course.subject} ${course.number} - ${course.title}`;
      courseContainer.appendChild(courseBtn);
    });
  
    // Update total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
  }
  
  // Event listeners for filter buttons
  document.querySelector('.filter-btn-all').addEventListener('click', () => displayCourses('All'));
  document.querySelector('.filter-btn-cse').addEventListener('click', () => displayCourses('CSE'));
  document.querySelector('.filter-btn-wdd').addEventListener('click', () => displayCourses('WDD'));
  
  // Initial display of all courses
  displayCourses('All');
  
  // Display copyright year and last modified date
  document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    const yearSpan = document.querySelector('#current-year');
    yearSpan.textContent = new Date().getFullYear();
  
    // Set the last modified date
    const lastModifiedSpan = document.querySelector('#last-modified');
    lastModifiedSpan.textContent = document.lastModified;
  });
  