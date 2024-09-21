// Show current year and last modified date
function showFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = document.lastModified;
}

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    showFooterInfo(); // Show footer information

    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Dynamically generate course list
    const courses = [
        { name: 'CSE 110', completed: true },
        { name: 'WDD 130', completed: false },
        { name: 'CSE 111', completed: true },
        { name: 'CSE 210', completed: false },
        { name: 'WDD 131', completed: true },
        { name: 'WDD 231', completed: false }
    ];

    const courseListElement = document.getElementById('course-list');
    const allButton = document.querySelector('.filter-button[data-filter="all"]');
    const cseButton = document.querySelector('.filter-button[data-filter="CSE"]');
    const wddButton = document.querySelector('.filter-button[data-filter="WDD"]');

    function displayCourses(filter = 'all') {
        courseListElement.innerHTML = '';
        const filteredCourses = courses.filter(course => {
            if (filter === 'all') return true;
            return course.name.startsWith(filter);
        });
        
        filteredCourses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.name;
            li.style.fontWeight = course.completed ? 'bold' : 'normal';
            li.style.color = course.completed ? 'green' : 'black';
            courseListElement.appendChild(li);
        });

        const totalCredits = filteredCourses.length * 3; // Assuming each course is 3 credits
        const creditsInfo = document.createElement('p');
        creditsInfo.textContent = `Total Credits: ${totalCredits}`;
        courseListElement.appendChild(creditsInfo);
    }

    allButton.addEventListener('click', () => displayCourses('all'));
    cseButton.addEventListener('click', () => displayCourses('CSE'));
    wddButton.addEventListener('click', () => displayCourses('WDD'));

    displayCourses(); // Initial display of all courses
});
