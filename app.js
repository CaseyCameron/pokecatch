import { generateThreePokemon } from './data-utils.js';


function displayPokemon(){
    const radio1 = document.querySelector('#pokemon1-radio');
    const radio2 = document.querySelector('#pokemon2-radio');
    const radio3 = document.querySelector('#pokemon3-radio');
    const label1 = document.querySelector('#pokemon1-label');
    const label2 = document.querySelector('#pokemon2-label');
    const label3 = document.querySelector('#pokemon3-label');
    const img1 = document.querySelector('#pokemon1-img');
    const img2 = document.querySelector('#pokemon2-img');
    const img3 = document.querySelector('#pokemon3-img');

    const generatedPokemon = generateThreePokemon();

    img1.src = generatedPokemon[0].url_image;
    label1.append(img1);
    radio1.value = generatedPokemon[0].pokemon;
    console.log(generatedPokemon[0]);
}

displayPokemon();