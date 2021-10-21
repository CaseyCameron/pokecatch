import pokemonArray from './data.js';
import { encounterPokemon } from './local-storage-utils.js';

let prevArr = [];

export function generateThreePokemon() {
    let currentArr = getRandomPokemonArray();
    while (duplicateChecker(currentArr) || currentArr.some(item => compareArrays(prevArr, item))) {
        currentArr = getRandomPokemonArray();
    }
    console.log(currentArr, prevArr);

    prevArr = currentArr;
    const newArr = currentArr.map(item => {
        encounterPokemon(pokemonArray[item]);
        return pokemonArray[item];
    });
    return newArr;
}

function getRandomPokemon() { //get 3 random pokemon
    return Math.floor(Math.random() * pokemonArray.length); //is it okay to generate 0? This happens.
}

function getRandomPokemonArray() { //get 3 random numbers
    let currentArr = [0, 1, 2];
    for (let item of currentArr) currentArr[item] = getRandomPokemon();
    return currentArr;
}

function duplicateChecker(arr) {
    const isDuplicate = arr.some((item, index) => arr.indexOf(item) !== index);
    return isDuplicate;
}

function compareArrays(prevArr, num) {
    return prevArr.includes(num);
}
