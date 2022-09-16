/* Imports */

/* Get DOM Elements */
const planetName = document.getElementById('planet-name');
const planetLocation = document.getElementById('planet-location');
const planetArch = document.getElementById('planet-arch');
const nameInput = document.getElementById('planet-name-input');
const locationSelect = document.getElementById('location-select');

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
/* Display Functions */
function displayPlanet() {
    planetName.textContent = nameInput.value;
    planetLocation.src = 'assets/locations/' + planet.location + '.png';
}

// (don't forget to call any display functions you want to run on page load!)

displayPlanet();
