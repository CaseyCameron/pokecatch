import { getPokedex } from '../local-storage-utils.js';
//import { findPokemonName } from '../utils.js';

const ul = document.querySelector('.pokemon-results');
const button = document.querySelector('.button-reset');
const pokedex = getPokedex();
for (let item of pokedex){
    const li = generatePokemonResults(item);
    ul.append(li);
}
//const pokemonImage = findPokemonName(pokedex.url_image);

export function generatePokemonResults(pokemon){

    const li = document.createElement('li');
    li.classList.add('pokemon');

    // const image = document.createElement('img');
    // image.classList.add('image');
    //image.src = pokemonImage;

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = 'Name: ' + pokemon.id;

    const pEncountered = document.createElement('p');
    pEncountered.classList.add('encountered');
    pEncountered.textContent = 'Encountered: ' + pokemon.encountered;

    const pCaptured = document.createElement('p');
    pCaptured.classList.add('captured');
    pCaptured.textContent = 'Captured: ' + pokemon.captured;

    li.append(pName, pEncountered, pCaptured);
    return li;
}

button.addEventListener('click', () => {
    //put our cart into a variable
    const pokedex = getPokedex();
    //alert the user
    alert(JSON.stringify(pokedex));
    localStorage.clear();
    window.location = '/';
});