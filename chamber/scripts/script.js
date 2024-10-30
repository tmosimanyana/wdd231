import { toggleTheme } from './themeToggle.js';
import { fetchWeather } from './weather.js';
import { renderSpotlights } from './spotlight.js';

toggleTheme();
fetchWeather();
renderSpotlights();
export function toggleTheme() {
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
export async function fetchWeather() {
    const apiKey = '5c7e429e1b20f30b60de00a18bcc0e92';
    const weatherElement = document.getElementById("currentWeather");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kweneng&appid=${apiKey}&units=imperial`);
        if (!response.ok) throw new Error("Weather data could not be retrieved");

        const data = await response.json();
        const currentTemp = `${Math.round(data.main.temp)}°F - ${data.weather[0].description}`;
        weatherElement.textContent = currentTemp;
    } catch (error) {
        weatherElement.textContent = "Unable to load weather data";
        console.error(error);
    }
}
const members = [
    { name: "BAMB Headquarters", address: "123 BAMB Rd, Kweneng", phone: "+267 123 4567", image: "images/bamb.webp", membershipLevel: "Gold" },
    { name: "AgriFeed GICP", address: "456 Agri Rd, Kweneng", phone: "+267 765 4321", image: "images/agrifeed.webp", membershipLevel: "Silver" },
    { name: "Greenhouse Technologies", address: "789 Greenhouse Ave, Kweneng", phone: "+267 111 2222", image: "images/greenhouse.webp", membershipLevel: "Silver" },
    { name: "AFGRI Equipment", address: "321 AFGRI St, Kweneng", phone: "+267 333 4444", image: "images/afgri.webp", membershipLevel: "Gold" },
    { name: "Hydrocon Green", address: "654 Hydrocon Way, Kweneng", phone: "+267 555 6666", image: "images/hydrocon.webp", membershipLevel: "Bronze" },
    { name: "Sediba - VFM", address: "987 Sediba Rd, Kweneng", phone: "+267 777 8888", image: "images/sediba.webp", membershipLevel: "Bronze" }
];

function getRandomSpotlights(data, count) {
    return data.filter(m => ["Gold", "Silver"].includes(m.membershipLevel))
               .sort(() => 0.5 - Math.random())
               .slice(0, count);
}

function createModal(member) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => modal.remove());
}

export function renderSpotlights() {
    const spotlightContainer = document.getElementById('business
