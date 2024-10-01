const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

function displayCourses(courseType = 'all') {
    const courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = '';
    let totalCredits = 0;

    const filteredCourses = courses.filter(course => 
        courseType === 'all' || course.subject === courseType.toUpperCase()
    );

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = `course ${course.completed ? 'completed' : ''}`;
        courseDiv.innerHTML = `${course.subject} ${course.number} - ${course.title}`;
        courseContainer.appendChild(courseDiv);

        if (course.completed) {
            totalCredits += course.credits;
        }
    });

    document.getElementById('totalCredits').textContent = totalCredits;
}

function filterCourses(courseType) {
    displayCourses(courseType);
}

document.addEventListener('DOMContentLoaded', () => {
    displayCourses('all');
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
