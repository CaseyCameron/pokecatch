import pokemonArray from './data.js';

export function findById(pokemonArray, id){
    for (let pokemonItem of pokemonArray){
        if (pokemonItem.id === id) return pokemonItem;
    }
}

export function findPokemonName(pokemonName){
    return pokemonArray.find(nameProperty => pokemonName === nameProperty.pokemon);
}