import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchFruits } from "../data/data.js";
import { createSubmitHandler, getUserData } from "../util.js";

const searchTemplate = (onSubmit) => html`
<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${onSubmit}>
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
</section>
`;

const resultTemplate = (results, onSubmit) => html`   
    <section id="search">
    
        <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit = ${onSubmit}>
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
            ${results.length > 0 ? html`
            ${results.map(fruit => html`
            <div class="fruit">
                <img src="${fruit.imageUrl}" alt="example1" />
                <h3 class="title">${fruit.name}</h3>
                <p class="description">${fruit.description}</p>
                <a class="details-btn" href="/details/${fruit._id}">More Info</a>
            </div>
            `)}
            `: html`<p class="no-result">No result.</p>`}  
            <!--If there are matches display a div with information about every fruit-->
        </div>
    </section>
`;

export async function searchPage(ctx) {
    const userData = getUserData();

    ctx.render(searchTemplate((createSubmitHandler(onSubmit))));

    async function onSubmit({ search }, form) {
        if (search == '') {
            return alert('Search field is required!')
        }

        const results = await searchFruits(search);

        ctx.render(resultTemplate(results, (createSubmitHandler(onSubmit))));
    }
}