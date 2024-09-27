(() => {
    // Course List Array with Updated Course Information
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming...',
            technology: ['Python'],
            completed: true // Course completed
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web...',
            technology: ['HTML', 'CSS'],
            completed: true // Course completed
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient...',
            technology: ['Python'],
            completed: true // Course completed
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes...',
            technology: ['C#'],
            completed: true // Course completed
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true // Course completed
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false // Course not completed
        }
    ];

    // Cache DOM elements
    const courseList = document.querySelector('.course-list');
    const creditsRequired = document.getElementById('credits-required');
    const creditsCompleted = document.getElementById('credits-completed');
    const lastUpdate = document.getElementById('last-update');

    // Calculate total credits and completed credits
    const calculateCredits = () => {
        const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
        const completedCredits = courses.filter(course => course.completed)
            .reduce((total, course) => total + course.credits, 0);
        
        creditsRequired.textContent = `Total Credits Required: ${totalCredits}`;
        creditsCompleted.textContent = `Total Credits Completed: ${completedCredits}`;
    };

    // Create a course card HTML dynamically
    const createCourseCard = ({ subject, number, title, description, credits, completed }) => `
        <div class="course-card ${completed ? 'completed' : 'incomplete'}">
            <h3>${subject} ${number}: ${title}</h3>
            <p>${description}</p>
            <p>Credits: ${credits}</p>
            <p>Status: ${completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    `;

    // Render courses based on filter (all, CSE, or WDD)
    const renderCourses = (filter = 'all') => {
        const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);
        courseList.innerHTML = filteredCourses.map(createCourseCard).join('');
    };

    // Event delegation for filtering courses
    const setupEventListeners = () => {
        document.querySelector('.filter-buttons').addEventListener('click', ({ target }) => {
            if (target.tagName === 'BUTTON') {
                const filterType = target.id === 'filter-cse' ? 'CSE' :
                                  target.id === 'filter-wdd' ? 'WDD' : 'all';
                renderCourses(filterType);
            }
        });
    };

    // Responsive Navigation Menu for Small Screens
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Initialize the application
    const init = () => {
        renderCourses(); // Render all courses initially
        calculateCredits(); // Calculate total and completed credits
        
        const currentYear = new Date().getFullYear();
        const lastModifiedDate = document.lastModified;

        document.querySelector('footer p').textContent = `©${currentYear} Rubia Magdalena Francesco 🌺 Madagascar`;
        lastUpdate.textContent = `Last Update: ${lastModifiedDate}`;

        setupEventListeners(); // Setup event listeners for filtering
    };

    init(); // Run the initialization function
})();

