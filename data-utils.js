import pokemonArray from './data.js';

export function generateThreePokemon(){
    let randomArray = getRandomPokemonArray();
    while (
        randomArray[0] === randomArray[1]
        || randomArray[1] === randomArray[2]
        || randomArray[0] === randomArray[2]
    ){ //while they aren't unique, get new numbers
        randomArray = getRandomPokemonArray();
    }
    //use the random numbers to increment the encountered value for pokemon
    //NEED CODE HERE

    return randomArray;
}

function getRandomPokemon(){ //get 3 random pokemon
    return Math.floor(Math.random() * pokemonArray.length);
}

function getRandomPokemonArray(){ //get 3 random numbers
    let randomArray = [0, 1, 2];
    for (let item of randomArray) randomArray[item] = getRandomPokemon();
    return randomArray;
}

    //attempt to check for duplicates in an array
    //check to see if any of these numbers are duplicates
    // if (randomArray.indexOf(randomArray[2]) !== -1){
    //     console.log(randomArray + ' success!');
    // } else console.log(randomArray + ' failure!');
    // const duplicateCheck = randomArray.some((val, i) => randomArray.indexOf(val) !== 1);