// directory.js
import { fetchMembers, renderMembers } from './main.js';

document.addEventListener("DOMContentLoaded", async function () {
    const toggleViewButton = document.getElementById("toggle-view");
    const memberContainer = document.getElementById("member-container");

    // Fetch and render members
    const members = await fetchMembers();
    renderMembers(members, memberContainer);

    toggleViewButton.addEventListener("click", function () {
        memberContainer.classList.toggle("grid-view");
        memberContainer.classList.toggle("list-view");
        
        toggleViewButton.textContent = memberContainer.classList.contains("grid-view")
            ? "Switch to List View"
            : "Switch to Grid View";
    });

    // Display the current year
    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();

    // Display last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString();
});
