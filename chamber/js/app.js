const gridViewButton = document.getElementById('gridView');
const listViewButton = document.getElementById('listView');
const membersSection = document.getElementById('members');

gridViewButton.addEventListener('click', () => {
    membersSection.classList.remove('list-view');
    membersSection.classList.add('grid-view');
    gridViewButton.setAttribute('aria-pressed', 'true');
    listViewButton.setAttribute('aria-pressed', 'false');
});

listViewButton.addEventListener('click', () => {
    membersSection.classList.remove('grid-view');
    membersSection.classList.add('list-view');
    listViewButton.setAttribute('aria-pressed', 'true');
    gridViewButton.setAttribute('aria-pressed', 'false');
});
