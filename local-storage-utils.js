import { findById } from './utils.js';

//create the key name for the local storage
const POKEDEX = 'POKEDEX';

//this localStorage POKEDEX, parses, and returns
export function getPokedex(storageKey){
    const stringyPokedex = localStorage.getItem(storageKey);
    if (!stringyPokedex)
        return [];
    else return JSON.parse(stringyPokedex);
}

//this takes the parsed pokedex and turns it into a string so we can save it into localStorage
export function setPokedex(parsedPokedex, pokeKey){
    const stringyPokedex = JSON.stringify(parsedPokedex);
    localStorage.setItem(pokeKey, stringyPokedex);
}

export function encounterPokemon(pokemon){
    // get access to the pokedex in local storage
    const pokedex = getPokedex(POKEDEX);
    const matchingStoragePokemon = findById(pokedex, pokemon.pokemon);
    if (matchingStoragePokemon){
        matchingStoragePokemon.encountered++;
    } else {
        const newStoragePokemon = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1,
            hp: pokemon.hp,
            speed: pokemon.speed,
            attack: pokemon.attack,
            defense: pokemon.defense
        };
        pokedex.push(newStoragePokemon);
    }
    setPokedex(pokedex, POKEDEX);
    return pokedex;
}

export function capturePokemon(pokemon){
    const pokedex = getPokedex(POKEDEX); //get access to the pokedex
    const matchingStoragePokemon = findById(pokedex, pokemon.pokemon); //find our pokemon in the pokedex
    matchingStoragePokemon.captured++; //increment the capture value
    setPokedex(pokedex, POKEDEX); //save it
    return pokedex;
}

export function addToPersistentStorage(){
    const permanentPokedex = getPokedex('PERSISTENTPOKEDEX'); 
    const temporaryPokedex = getPokedex('POKEDEX'); 
    for (let item of temporaryPokedex){
        permanentPokedex.captured += item.captured;
        permanentPokedex.encountered += item.encountered;
    }
    console.log(permanentPokedex.captured);
    const stringyPermanentDex = JSON.stringify(permanentPokedex);
    setPokedex(stringyPermanentDex, 'PERSISTENTPOKEDEX'); //save it
}