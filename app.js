/* Imports */

/* Get DOM Elements */
const planetName = document.getElementById('planet-name');
const planetLocation = document.getElementById('planet-location');
const planetArch = document.getElementById('planet-arch');
const nameInput = document.getElementById('planet-name-input');

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

/* Display Functions */
function displayPlanet() {
    planetName.textContent = nameInput.value;
}
git;
// (don't forget to call any display functions you want to run on page load!)

displayPlanet();
