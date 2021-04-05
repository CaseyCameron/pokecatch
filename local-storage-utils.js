import { findById } from './utils.js';

//create the key name for the local storage
const POKEDEX = 'POKEDEX';

//this stringifies localStorage POKEDEX, parses, and returns
export function getPokedex(){
    //stringify
    const stringyPokedex = localStorage.getItem(POKEDEX);
    //if empty
    if (!stringyPokedex)
        return [];
    // if not empty, parse stringyPokedex and return
    else return JSON.parse(stringyPokedex);
}

//this takes the parsed pokedex and turns it into a string so we can save it into localStorage
export function setPokedex(parsedPokedex){
    // turn the pokedex into a string
    const stringyPokedex = JSON.stringify(parsedPokedex);
    //save and store the string data into the pokedex local storage
    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(pokemon){
    // get access to the pokedex in local storage
    const pokedex = getPokedex();
    //check to see if pokemon already exists in local storage by checking names
    const matchingPokemon = findById(pokedex, pokemon.pokemon);

}