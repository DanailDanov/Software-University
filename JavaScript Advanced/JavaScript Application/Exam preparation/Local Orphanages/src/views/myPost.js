import { html } from "../../node_modules/lit-html/lit-html.js";
import { myPost } from "../data/data.js";
import { getUserData } from "../util.js";

const myPostTemplate = (ownPosts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${ownPosts.length > 0 ? html`
    <div class="my-posts">
        ${ownPosts.map(p => html`
        <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src="${p.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${p._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>`: html` <h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>
`;

export async function myPostPage(ctx) {

    const userData = getUserData();
    const ownPosts = await myPost(userData._id);

    ctx.render(myPostTemplate(ownPosts))

}
