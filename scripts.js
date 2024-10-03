// Display last modified date
const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = document.lastModified;

// Course Filtering Functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
const courses = document.querySelectorAll('.course');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.id.split('-')[1]; // Get filter type (all, cse, wdd)
    courses.forEach(course => {
      if (filter === 'all' || course.classList.contains(filter)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });
});
