// Course List Array  
const courses = [  
    { name: "CSE 110", credits: 3, completed: true },  
    { name: "WDD 130", credits: 3, completed: false },  
    { name: "CSE 111", credits: 3, completed: true },  
    { name: "WDD 131", credits: 3, completed: false },  
    { name: "CSE 210", credits: 3, completed: true },  
    { name: "WDD 231", credits: 3, completed: false }  
];  

// Function to dynamically populate the course list  
function displayCourses(filter = 'all') {  
    const courseList = document.getElementById('course-list');  
    courseList.innerHTML = ''; // Clear existing courses  
    courses.forEach(course => {  
        if (filter === 'all' || course.name.startsWith(filter)) {  
            const courseCard = document.createElement('div');  
            courseCard.className = 'course-card';  
            courseCard.innerHTML = `  
                <h3>${course.name}</h3>  
                <p>Credits: ${course.credits}</p>  
            `;  
            if (course.completed) {  
                courseCard.classList.add('completed');  
                courseCard.innerHTML += `<p>Status: Completed</p>`;  
            } else {  
                courseCard.innerHTML += `<p>Status: Not Completed</p>`;  
            }  
            courseList.appendChild(courseCard);  
        }  
    });  
}  

// Function to calculate total credits  
function calculateTotalCredits() {  
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0);  
    document.getElementById('total-credits').textContent = totalCredits;  
}  

// Event listeners for filter buttons  
document.getElementById('all-courses').addEventListener('click', () => displayCourses('all'));  
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));  
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));  

// Populate current year and last modified date  
document.getElementById('currentyear').textContent = new Date().getFullYear();  
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;  

// Hamburger menu functionality  
document.getElementById('hamburger').addEventListener('click', () => {  
    const navLinks = document.getElementById('nav-links');  
    navLinks.classList.toggle('active');  
});  

// Initial display of courses and total credits  
displayCourses();  
calculateTotalCredits();