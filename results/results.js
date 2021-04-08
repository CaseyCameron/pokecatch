import { getPokedex } from '../local-storage-utils.js';
//import { findPokemonName } from '../utils.js';

const ul = document.querySelector('.pokemon-results');
const button = document.querySelector('.button-reset');
const pokedex = getPokedex('POKEDEX');
var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];

for (let item of pokedex){
    const li = generatePokemonResults(item);
    ul.append(li);
    names.push(item.id);
    encountered.push(item.encountered);
    captured.push(item.captured);
}

export function generatePokemonResults(pokemon){
    const li = document.createElement('li');
    li.classList.add('pokemon');

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = 'Name: ' + pokemon.id;

    const pEncountered = document.createElement('p');
    pEncountered.classList.add('encountered');
    pEncountered.textContent = 'Encountered: ' + pokemon.encountered;

    const pCaptured = document.createElement('p');
    pCaptured.classList.add('captured');
    pCaptured.textContent = 'Captured: ' + pokemon.captured;

    li.append(pName, pEncountered, pCaptured);
    return li;
}

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon encountered',
                data: encountered,
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 1
            },
            {
                label: 'Pokemon captured',
                data: captured,
                backgroundColor: 'yellow',
                borderColor: 'steelblue',
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

button.addEventListener('click', () => {
    //put our cart into a variable
    const pokedex = getPokedex('POKEDEX');
    //alert the user
    alert(JSON.stringify(pokedex));
    localStorage.clear();
    window.location = '/index.html';
});
