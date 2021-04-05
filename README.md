## HTML Setup
1) Under bootstrap header in maine section implement 3 columns
2) Implement 3 rows
    -Row one: poke images poke1, poke2, poke3
    -Row two: radio buttons radio1, radio2, radio3

```
    <div>
        <label id="poke1-label">
            <input name="pokemon" type="radio" id="poke1-radio" />
            <img id="poke1-img" />
        </label>
        <label id="poke2-label">
            <input name="pokemon" type="radio" id="poke2-radio">
            <img id="poke2-img" />
        </label>
        <label id="poke3-label">
        <input name="pokemon" type="radio" id="poke3-radio">
        <img id="poke3-img" />
        <div>
            <button></button>
        </div>
     </div>
```

```
    input {
        display: none;
    }

    input:checked + img {
        border: solid 2px blue
    }
```
    - row three: onclick button


## State
1) Keep track of
    -Increment each time pokemon is encountered
    -Increment each time pokemon is caught
2) You'll need these values:

forAnyPokemonObject {
    id: string,
    captured: number, 
    encountered: number
}

## Events
1) onLoad
    - generateThreePokemon
2) onClick
    - Send the selected pokemon to local storage (POKEDEX)
    - findById to see which pokemon is selected
    - check to see if any of the 3 pokemon are duplicates of each other.
        - If so, get 3 new pokemon
    - increment the encounter state
    - increment the capture state

## Functions
- generateThreePokemon
    - start with raw array of pokemon data
    - use Math.random to get 3 random array indexes
        - Ensure they're unique
            - While loop - if they aren't unique, get three new random numbers
    - use the 3 indexes to get 3 pokemon
    - increment encountered value for all 3 pokemon
    - display in DOM

- Inside local-storage-utils.js
    - getPokedex
        - const POKEDEX = 'POKEDEX' //create our local storage key
        - const stringyPokedex = localStorage.getItem(POKEDEX)
        - if(!stringyPokedex) return []
            - else return parsedPokedex = JSON.parse(pokedex)
    - setPokedex(parsedPokedex)
        - const stringyPokedex = JSON.stringify(parsedPokedex)
        - localStorage.setItem(POKEDEX, stringyPokedex)
    - encounterPokemon(pokemon)
        - const pokedex = getPokedex(); //we've encoutner a poke so stringify it
        - const matchingPokedexItem = findById(pokedex, pokemon,pokemon) // find it by sending the parsed localStorage and match it with a pokemon object
        - if(matchingPokedexItem)
            - matchingPOkedexItem.encounter++; //increment encountered
        - else
            - const newPokedexItem = {id: pokemon.pokemon, catpure: 0, encountered: 1}
        - pokedex.push(newPokedexItem) push it into local storage
        - setPokedex(pokedex)
        - return pokedex
    - capturePokemon()
        - grab our pokedex from localStorage
        - increment the captured value for that pokemon