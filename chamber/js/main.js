// Select buttons and the display area
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

// Function to switch to the grid view
function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}

// Function to switch to the list view
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

// Add event listeners to buttons
gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);

// Set a default view, e.g., grid
showGrid(); // or showList() depending on the default view you want
