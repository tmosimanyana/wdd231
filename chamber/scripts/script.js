document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.getElementById('member-list');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid');
    }

    function displayMembers(members, view) {
        memberList.innerHTML = '';
        memberList.className = view === 'grid' ? 'grid-view' : 'list-view';

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'member';

            const memberImage = document.createElement('img');
            memberImage.src = `images/${member.image}`;
            memberImage.alt = `${member.name} Logo`;

            const memberInfo = document.createElement('div');
            memberInfo.className = 'member-info';

            const memberName = document.createElement('h3');
            memberName.textContent = member.name;

            const memberAddress = document.createElement('p');
            memberAddress.textContent = member.address;

            const memberPhone = document.createElement('p');
            memberPhone.textContent = member.phone;

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = 'Visit Website';

            memberInfo.appendChild(memberName);
            memberInfo.appendChild(memberAddress);
            memberInfo.appendChild(memberPhone);
            memberInfo.appendChild(memberWebsite);

            memberDiv.appendChild(memberImage);
            memberDiv.appendChild(memberInfo);

            memberList.appendChild(memberDiv);
        });
    }

    gridViewBtn.addEventListener('click', () => {
        fetchMembers().then(members => displayMembers(members, 'grid'));
    });

    listViewBtn.addEventListener('click', () => {
        fetchMembers().then(members => displayMembers(members, 'list'));
    });

    // Fetch and display members on page load
    fetchMembers();

    // Update the footer with the current year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
