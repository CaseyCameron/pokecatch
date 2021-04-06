import { findById } from './utils.js';

//create the key name for the local storage
const POKEDEX = 'POKEDEX';

//this localStorage POKEDEX, parses, and returns
export function getPokedex(){
    //get the POKEDEX entry in localStorage
    const stringyPokedex = localStorage.getItem(POKEDEX);
    //if empty
    if (!stringyPokedex)
        return [];
    // if not empty, parse the Pokedex (which is a string) and return an object
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
    const matchingStoragePokemon = findById(pokedex, pokemon.pokemon);
    //if it's in the local storage, increment the encounter value
    if (matchingStoragePokemon){
        matchingStoragePokemon.encountered++;
    } else {
        //if it's not in there that means it's the first time local storage is seeing it and needs to be created
        const newStoragePokemon = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };
        //now you need to push the new pokemon into storage
        pokedex.push(newStoragePokemon);
    }
    //parse the updated or new data and save it to local storage
    setPokedex(pokedex);
    return pokedex; //why do we need to do this?
}

export function capturePokemon(pokemon){
    const pokedex = getPokedex(); //get access to the pokedex
    const matchingStoragePokemon = findById(pokedex, pokemon.pokemon); //find our pokemon in the pokedex
    matchingStoragePokemon.captured++; //increment the capture value
    setPokedex(pokedex); //save it
    return pokedex;
}