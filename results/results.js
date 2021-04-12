import { getPokedex } from '../local-storage-utils.js';
//import { findPokemonName } from '../utils.js';

const ul = document.querySelector('.pokemon-results');
const button = document.querySelector('.button-reset');
const pokedex = getPokedex('POKEDEX');
var ctx = document.getElementById('myChart').getContext('2d');
var statChartX = document.getElementById('statChart').getContext('2d');
var combatChartX = document.getElementById('combatChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];
const hp = [];
const speed = [];
const attack = [];
const defense = [];

for (let item of pokedex){
    const li = generatePokemonResults(item);
    ul.append(li);
    names.push(item.id);
    encountered.push(item.encountered);
    captured.push(item.captured);
    hp.push(item.hp);
    speed.push(item.speed);
    attack.push(item.attack);
    defense.push(item.defense);
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

var statChart = new Chart(statChartX, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon hp',
                data: hp,
                backgroundColor: 'pink',
                borderColor: 'red',
                borderWidth: 1
            },
            {
                label: 'Pokemon speed',
                data: speed,
                backgroundColor: 'goldenrod',
                borderColor: 'yellow',
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

var combatChart = new Chart(combatChartX, { // eslint-disable-line
    type: 'pie',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon attack',
                data: attack,
                backgroundColor: [
                    'lightblue',
                    'red',
                    'blue',
                    'yellow',
                    'orange',
                    'green',
                    'purple',
                    'gray',
                    'peru',
                    'goldenrod']
            },
            {
                label: 'Pokemon attack',
                data: defense,
                backgroundColor: [
                    'rgb(173, 216, 230, 0.3)',
                    'rgba(255,0,0,0.3',
                    'rgba(0, 0, 255, 0.3)',
                    'rgb(255, 255, 0, 0.3)',
                    'rgb(255, 165, 0, 0.3)',
                    'rgba(0, 255, 0, 0.3)',
                    'rgb(128, 0, 128, 0.3)',
                    'rgb(128, 128, 128, 0.3)',
                    'rgb(205, 133, 63, 0.3)',
                    'rgb(218, 165, 32, 0.3)']
            },
        ]
    },
    hoverOffset: 4
});

button.addEventListener('click', () => {
    //put our cart into a variable
    const pokedex = getPokedex('POKEDEX');
    //alert the user
    alert(JSON.stringify(pokedex));
    localStorage.clear();
    window.location = '../index.html';
});
