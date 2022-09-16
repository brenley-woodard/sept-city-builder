/* Imports */

/* Get DOM Elements */
const planetName = document.getElementById('planet-name');
const planetLocation = document.getElementById('planet-location');
const planetArch = document.getElementById('planet-arch');

const nameInput = document.getElementById('planet-name-input');
const locationSelect = document.getElementById('location-select');
const archSelect = document.getElementById('arch-select');

const attractionList = document.getElementById('attraction-list');
const attractionInput = document.getElementById('attraction-input');
const addAttractionButton = document.getElementById('add-attraction-button');

/* State */
let planet = {
    name: 'Naboo',
    location: 'underwater',
    arch: 'industrial',
    attraction: [],
};
/* Events */
nameInput.addEventListener('input', () => {
    planet.name = nameInput.value;

    displayPlanet();
});

locationSelect.addEventListener('change', () => {
    planet.location = locationSelect.value;

    displayPlanet();
});

archSelect.addEventListener('change', () => {
    planet.arch = archSelect.value;

    displayPlanet();
});

addAttractionButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    planet.attraction.push(attraction);
    displayAttraction();
    attractionInput.value = '';
});

/* Display Functions */
function displayPlanet() {
    planetName.textContent = nameInput.value;
    planetLocation.src = 'locations/' + planet.location + '.png';
    planetArch.src = 'arch/' + planet.arch + '.png';
}

function displayAttraction() {
    attractionList.innerHTML = '';

    for (let attraction of planet.attraction) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}
// (don't forget to call any display functions you want to run on page load!)

displayPlanet();
displayAttraction();
