function filterCourses(category) {  
    const courses = document.querySelectorAll('.course-list button');  
    courses.forEach(course => {  
        if (category === 'all') {  
            course.style.display = 'block';  
        } else if (category === 'cse' && course.textContent.startsWith('CSE')) {  
            course.style.display = 'block';  
        } else if (category === 'wdd' && course.textContent.startsWith('WDD')) {  
            course.style.display = 'block';  
        } else {  
            course.style.display = 'none';  
        }  
    });  
}
