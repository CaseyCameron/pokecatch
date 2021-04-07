import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findPokemonName } from './utils.js';

const button = document.querySelector('.button');
let captures = 0;

function renderPokemonToDOM(){
    const radio1 = document.querySelector('#pokemon1-radio');
    const radio2 = document.querySelector('#pokemon2-radio');
    const radio3 = document.querySelector('#pokemon3-radio');
    const label1 = document.querySelector('#pokemon1-label');
    const label2 = document.querySelector('#pokemon2-label');
    const label3 = document.querySelector('#pokemon3-label');
    const img1 = document.querySelector('#pokemon1-img');
    const img2 = document.querySelector('#pokemon2-img');
    const img3 = document.querySelector('#pokemon3-img');
    const name1 = document.querySelector('#pokemon1-name');
    const name2 = document.querySelector('#pokemon2-name');
    const name3 = document.querySelector('#pokemon3-name');

    const generatedPokemon = generateThreePokemon();
    displayPokemon(img1, label1, radio1, generatedPokemon[0], name1);
    displayPokemon(img2, label2, radio2, generatedPokemon[1], name2);
    displayPokemon(img3, label3, radio3, generatedPokemon[2], name3);
}

renderPokemonToDOM();

function displayPokemon(image, label, radio, id, name){
    image.src = id.url_image;
    label.append(image);
    radio.value = id.pokemon;
    name.textContent = radio.value;
}

button.addEventListener('click', () => {
    captures++;
    const selectedRadio = document.querySelector('input:checked');
    const selectedPokemon = findPokemonName(selectedRadio.value);
    capturePokemon(selectedPokemon);
    if (captures >= 10){
        window.location.href = '../results/index.html';
    }
    renderPokemonToDOM();
});
