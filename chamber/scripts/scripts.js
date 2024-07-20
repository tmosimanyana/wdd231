document.addEventListener('DOMContentLoaded', () => {
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function displayMembers(members) {
        const membersSection = document.getElementById('members');
        membersSection.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'directory-item';

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>${member.description}</p>
            `;

            membersSection.appendChild(memberDiv);
        });
    }

    // Toggle view functionality
    document.getElementById('gridView').addEventListener('click', () => {
        document.getElementById('members').classList.add('directory-grid');
        document.getElementById('members').classList.remove('directory-list');
        document.getElementById('gridView').classList.add('active');
        document.getElementById('listView').classList.remove('active');
    });

    document.getElementById('listView').addEventListener('click', () => {
        document.getElementById('members').classList.add('directory-list');
        document.getElementById('members').classList.remove('directory-grid');
        document.getElementById('listView').classList.add('active');
        document.getElementById('gridView').classList.remove('active');
    });

    // Display current year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Fetch and display members
    fetchMembers();
});
