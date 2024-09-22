// Array to hold completed courses and their credits
const completedCourses = [
    { name: "Dynamic Web Fundamentals", credits: 2 },
    { name: "Introduction to Databases", credits: 3 },
    { name: "Programming with Classes", credits: 2 },
    { name: "Programming with Functions", credits: 2 },
    { name: "Web Fundamentals", credits: 2 },
    { name: "Introduction to Programming", credits: 3 },
    { name: "Math for Real Life", credits: 3 }
];

// Function to calculate total credits
function calculateTotalCredits() {
    return completedCourses.reduce((total, course) => total + course.credits, 0);
}

// Function to update the HTML with completed courses and credits
function updateCourseProgress() {
    const totalCredits = calculateTotalCredits();
    const creditsRemaining = 90 - totalCredits; // Assuming 90 credits are required for graduation

    const completedCoursesList = document.getElementById("completed-courses");
    completedCoursesList.innerHTML = ""; // Clear existing list

    completedCourses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course.name;
        completedCoursesList.appendChild(li);
    });

    document.getElementById("total-credits").textContent = totalCredits;
    document.getElementById("credits-remaining").textContent = creditsRemaining;
}

// Initialize the course progress on page load
document.addEventListener("DOMContentLoaded", updateCourseProgress);
