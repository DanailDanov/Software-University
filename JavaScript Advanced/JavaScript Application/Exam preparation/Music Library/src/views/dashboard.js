import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../data/data.js";

const dashboardTemplate = (songs) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${songs.length > 0 ? html`
    <ul class="card-wrapper">
        ${songs.map(song => html`
        <!-- Display a li with information about every post (if any)-->
        <li class="card">
            <img src= ${song.imageUrl} alt="travis" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${song.singer}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${song.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${song.sales}</span></p>
            <a class="details-btn" href="/details/${song._id}">Details</a>
        </li>`)}
    </ul>
    `: html`
    <!-- Display an h2 if there are no posts -->
    <h2>There are no albums added yet.</h2>`}
</section>
`;

export async function dashboardPage(ctx) {
    const songs = await getAll();
    ctx.render(dashboardTemplate(songs));
}