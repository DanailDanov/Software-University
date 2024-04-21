import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../data/data.js";

const dashboardTemplate = (products) => html`
<section id="dashboard">
    <h2>Collectibles</h2>

    ${products.length > 0 ? html`
    <ul class="card-wrapper">
        ${products.map(product => html`
        <!-- Display a li with information about every post (if any)-->
        <li class="card">
            <img src="${product.imageUrl}" alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${product.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${product.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${product.value}</span>$</p>
            <a class="details-btn" href="/details/${product._id}">Details</a>
        </li>
        `)}
    </ul>
    `: html`
    <!-- Display an h2 if there are no posts -->
    <h2>There are no items added yet.</h2>`}
</section>
`;

export async function dashboardPage(ctx) {
    const products = await getAll();
    ctx.render(dashboardTemplate(products))
}