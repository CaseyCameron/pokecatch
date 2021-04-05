export function findById(pokemonArray, id){
    for (let pokemonItem of pokemonArray){
        if (pokemonItem.id === id) return pokemonItem;
    }
}