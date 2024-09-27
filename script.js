(() => {
    // Course List Array
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            completed: false
        }
    ];

    // Cache DOM elements
    const courseList = document.querySelector('.course-list');
    const creditsRequired = document.getElementById('credits-required');
    const creditsCompleted = document.getElementById('credits-completed');
    const lastUpdate = document.getElementById('last-update');

    // Calculate total credits
    const calculateCredits = () => {
        const totalCredits = courses.reduce((total, { credits }) => total + credits, 0);
        const completedCredits = courses.filter(({ completed }) => completed).reduce((total, { credits }) => total + credits, 0);
        
        creditsRequired.textContent = `Total Credits Required: ${totalCredits}`;
        creditsCompleted.textContent = `Total Credits Completed: ${completedCredits}`;
    };

    // Create a course card HTML
    const createCourseCard = ({ subject, number, title, credits, completed }) => `
        <div class="course ${completed ? 'completed' : 'incomplete'}">
            <h3>${subject} ${number}: ${title}</h3>
            <p>Credits: ${credits}</p>
            <p>Status: ${completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    `;

    // Render courses based on filter
    const renderCourses = (filter = 'all') => {
        const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);
        courseList.innerHTML = filteredCourses.map(createCourseCard).join('');
    };

    // Event delegation for filtering
    const setupEventListeners = () => {
        document.querySelector('.filter-buttons').addEventListener('click', ({ target }) => {
            if (target.tagName === 'BUTTON') {
                const filterType = target.id === 'filter-cse' ? 'CSE' : (target.id === 'filter-wdd' ? 'WDD' : 'all');
                renderCourses(filterType);
            }
        });
    };

    // Initialize application
    const init = () => {
        renderCourses();
        calculateCredits();
        
        const currentYear = new Date().getFullYear();
        const lastModifiedDate = document.lastModified;

        document.querySelector('footer p').textContent = `©${currentYear} 🌺 Tinny Bothepha Mosimanyana
         🌺 Botswana`;
        lastUpdate.textContent = lastModifiedDate;

        setupEventListeners();
    };

    init(); // Run the init function
})();
