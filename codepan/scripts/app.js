// Select the HTML elements to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Variables for activity use
let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

// Output today's date in the specified format
today1.innerHTML = new Date().toLocaleDateString("en-US", options).replace(/(\w{3}) (\d{1,2}), (\d{4})/, '$1 $2, $3');

// Output volume using template literals
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;

// Declare a variable named quantity and assign it the value of the HTML input element with an id of q
let quantity = document.querySelector('#q').value;

// Output to the first aside
document.querySelector('aside').innerHTML = 'Welcome to <mark>our</mark> neighborhood!';

// Output the returned value of the getCelsius function
document.querySelector('#temp').value = getCelsius(33);

// Select all div elements and assign the result to a const variable named divs
const divs = document.querySelectorAll('div');
const divCount = divs.length;

// Format the output like this: "There are 10 div elements on the page."
document.querySelector('#divs').innerHTML = `There are ${divCount} div elements on the page.`;

// Filter citynames for those starting with the letter "C"
let filterC = citynames.filter(city => city.charAt(0) === 'C');

// Output filtered city names to the provided div element with id of c-names
document.querySelector('#c-names').innerHTML = `Cities starting with "C": ${filterC.join(', ')}`;
