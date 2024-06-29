document.addEventListener('DOMContentLoaded', () => {
    // Populate current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Populate last modified date in footer
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    // Responsive menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        document.addEventListener('DOMContentLoaded', () => {
            const courses = [
                { id: 'CSE110', title: 'Introduction to Computer Science', completed: true },
                { id: 'WDD130', title: 'Web Development Fundamentals', completed: true },
                { id: 'CSE111', title: 'Introduction to Programming', completed: false },
                { id: 'CSE210', title: 'Data Structures', completed: false },
                { id: 'WDD131', title: 'Intermediate Web Development', completed: true },
                { id: 'WDD231', title: 'Advanced Web Development', completed: false },
            ];
        
            function displayCourses(filter = 'all') {
                const courseContainer = document.querySelector('.courses');
                courseContainer.innerHTML = '';
        
                const filteredCourses = courses.filter(course => {
                    return filter === 'all' || course.id.startsWith(filter);
                });
        
                filteredCourses.forEach(course => {
                    const courseDiv = document.createElement('div');
                    courseDiv.classList.add('course');
                    if (course.completed) {
                        courseDiv.classList.add('completed');
                    }
                    courseDiv.textContent = `${course.id}: ${course.title}`;
                    courseContainer.appendChild(courseDiv);
                });
        
                const totalCredits = filteredCourses.length * 3; // Assuming each course is 3 credits
                const totalCreditsDiv = document.createElement('div');
                totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
                courseContainer.appendChild(totalCreditsDiv);
            }
        
            displayCourses();
        
            window.filterCourses = function (category) {
                displayCourses(category);
            };
        });        
    });
});




