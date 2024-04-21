import {html, render} from '../node_modules/lit-html/lit-html.js';

const loadBtn = document.getElementById('btnLoadTowns');
const inputField = document.getElementById('towns');
const root = document.getElementById('root');

const townsTemplate = (towns) => html`
    <ul> 
       ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
`

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const towns = inputField.value.split(', ');

    render(townsTemplate(towns), root);
})
