import pokemonArray from './data.js';
import { encounterPokemon } from './local-storage-utils.js';

export function generateThreePokemon(){
    let randomArray = getRandomPokemonArray();
    while (
        randomArray[0] === randomArray[1]
        || randomArray[1] === randomArray[2]
        || randomArray[0] === randomArray[2]
    ){ //while they aren't unique, get new numbers
        randomArray = getRandomPokemonArray();
    }
    const pokemon1 = pokemonArray[randomArray[0]];
    const pokemon2 = pokemonArray[randomArray[1]];
    const pokemon3 = pokemonArray[randomArray[2]];

    encounterPokemon(pokemon1);
    encounterPokemon(pokemon2);
    encounterPokemon(pokemon3);

    return [pokemon1, pokemon2, pokemon3];
}

function getRandomPokemon(){ //get 3 random pokemon
    return Math.floor(Math.random() * pokemonArray.length); //is it okay to generate 0? This happens.
}

function getRandomPokemonArray(){ //get 3 random numbers
    let randomArray = [0, 1, 2];
    for (let item of randomArray) randomArray[item] = getRandomPokemon();
    return randomArray;
}