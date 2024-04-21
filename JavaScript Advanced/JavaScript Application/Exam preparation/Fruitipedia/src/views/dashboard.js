import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../data/data.js";

const dashboardTemplate = (fruits) => html`
<h2>Fruits</h2>
<section id="dashboard">

    ${fruits.length > 0 ? html`
    ${fruits.map(fruit => html`
    <!-- Display a div with information about every post (if any)-->
    <div class="fruit">
        <img src="${fruit.imageUrl}" alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">${fruit.description}</p>
        <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
    `)}
    ` : html`
    <!-- Display an h2 if there are no posts -->
    <h2>No fruit info yet.</h2>
    `}
</section>
`;

export async function dashboardPage(ctx) {
    const fruits = await getAll();
    ctx.render(dashboardTemplate(fruits))
}