import { html } from "../../node_modules/lit-html/lit-html.js";
import { addLike, deleteOffer, getById } from "../data/books.js";
import { getUserData } from "../util.js";
import { userLikes, totalBookLikes } from "../data/books.js";

const detailsTemplate = (book, isOwner, onDelete, likes, showLikeBtn, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
           
            ${bookControlTemplate(book, isOwner, onDelete)}
            ${likeControlTemplate(showLikeBtn, onLike)}
           
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>      
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

const bookControlTemplate = (book, isOwner, onDelete) => {

    if (isOwner) {
        return html`<a class="button" href="/catalog/${book._id}/edit">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
}

const likeControlTemplate = (showLikeBtn, onLike) => {
    if (showLikeBtn) {
        return html`
        <a @click=${onLike} class="button" href="javascript:void(0)">Like</a>
        `;
    } else {
        return null;
    }
}
export async function datailsPage(ctx) {

    const id = ctx.params.id;
    const book = await getById(id);
    const userId = getUserData()?._id;
    const isOwner = book._ownerId === userId;
    const likes = await totalBookLikes(id);
    const myLikes = await userLikes(id, userId);
    const showLikeBtn = !isOwner && !myLikes && userId;
  
    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeBtn, onLike));

    async function onDelete() {

        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            await deleteOffer(id);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await addLike(id)
        ctx.page.redirect(`/catalog/${id}`);
    }
}

