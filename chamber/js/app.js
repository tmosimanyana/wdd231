document.getElementById('gridView').addEventListener('click', function() {
    const members = document.getElementById('members');
    members.classList.remove('list-view');
    members.classList.add('grid-view');
});

document.getElementById('listView').addEventListener('click', function() {
    const members = document.getElementById('members');
    members.classList.remove('grid-view');
    members.classList.add('list-view');
});
