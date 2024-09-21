// Get the current year for the footer  
document.getElementById('currentyear').textContent = new Date().getFullYear();  

// Get the last modified date for the footer  
document.getElementById('lastModified').textContent = `Last updated: ${document.lastModified}`;  

// Course array (replace with actual course data)  
const courses = [  
    { name: 'CSE 110', credits: 3, completed: true },  
    { name: 'WDD 130', credits: 3, completed: false },  
    { name: 'CSE 111', credits: 3, completed: true },  
    { name: 'CSE 210', credits: 3, completed: false },  
];  

// Function to display courses  
function displayCourses(filter) {  
    const courseList = document.getElementById('course-list');  
    courseList.innerHTML = ''; // Clear previous content  

    const filteredCourses = courses.filter(course => {  
        if (filter === 'All') return true;  
        return course.name.startsWith(filter);  
    });  

    filteredCourses.forEach(course => {  
        const courseCard = document.createElement('div');  
        courseCard.className = 'course-card';  
        courseCard.textContent = `${course.name} - ${course.credits} credits`;  
        if (course.completed) {  
            courseCard.classList.add('completed');  
        }  
        courseList.appendChild(courseCard);  
    });  
}  

// Event listeners for filter buttons  
document.addEventListener('DOMContentLoaded', () => {  
    displayCourses('All'); // Display all courses by default  

    // Add filter buttons  
    const filterButtons = document.querySelectorAll('.filter-button');  
    filterButtons.forEach(button => {  
        button.addEventListener('click', () => {  
            displayCourses(button.textContent);  
        });  
    });  
});
