// scripts/main.js

import { renderMembers, toggleView, showModal } from './directory.js';

document.addEventListener("DOMContentLoaded", async () => {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
    
    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;

    // Event listener for the toggle view button
    document.getElementById('toggle-view').addEventListener('click', () => {
        toggleView();
    });

    // Fetch members data and render it
    try {
        const members = await fetchMembers();
        renderMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
});

// Fetch member data from a JSON file (replace with your data path)
async function fetchMembers() {
    const response = await fetch('./data/members.json'); // Assuming your JSON file is in a folder named 'data'
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
}
