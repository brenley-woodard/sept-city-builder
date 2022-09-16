/* Imports */

/* Get DOM Elements */
const planetName = document.getElementById('planet-name');
const planetLocation = document.getElementById('planet-location');
const planetArch = document.getElementById('planet-arch');
const nameInput = document.getElementById('planet-name-input');
const locationSelect = document.getElementById('location-select');
const archSelect = document.getElementById('arch-select');

/* State */
let planet = {
    name: 'Naboo',
    location: 'underwater',
    arch: 'industrial',
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

/* Display Functions */
function displayPlanet() {
    planetName.textContent = nameInput.value;
    planetLocation.src = 'locations/' + planet.location + '.png';
    planetArch.src = 'arch/' + planet.arch + '.png';
}

// (don't forget to call any display functions you want to run on page load!)

displayPlanet();
