import { generateThreePokemon } from './data-utils.js';

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
    displayPokemonImage(img1, label1, radio1, generatedPokemon[0], name1);
    displayPokemonImage(img2, label2, radio2, generatedPokemon[1], name2);
    displayPokemonImage(img3, label3, radio3, generatedPokemon[2], name3);
}

renderPokemonToDOM();

function displayPokemonImage(image, label, radio, id, name){
    image.src = id.url_image;
    label.append(image);
    radio.value = id.pokemon;
    name.textContent = radio.value;
}