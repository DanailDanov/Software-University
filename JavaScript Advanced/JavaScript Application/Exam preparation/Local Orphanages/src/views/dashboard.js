import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../data/data.js";

const dashboardTemplate = (products) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
        ${products.length > 0 ? html`
        ${products.map(p => html`
        <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src="${p.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${p._id}" class="details-btn btn">Details</a>
            </div>
            `)}
            `: html` <h1 class="title no-posts-title">No posts yet!</h1>`}
        </div>
</section>
`;

export async function dashboardPage(ctx) {
    const products = await getAll();
    ctx.render(dashboardTemplate(products))
}