import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getById, likes, totalLikes } from "../data/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, totalAlbumLikes, deleteItem, likeAlbum, userLikes) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalAlbumLikes}</span></div>
        ${album.hasUser ? html`
        <div id="action-buttons">
            ${album.isOwner ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteItem}>Delete</a>
            ` : null}
            ${!album.isOwner && userLikes == 0 ? html`
            <a href="javascript:void(0)" id="like-btn" @click=${likeAlbum}>Like</a>
            ` : null}
        </div>
        ` : null}
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const albumId = ctx.params.id;
    const album = await getById(albumId);
    const userData = getUserData();
    const totalAlbumLikes = await totalLikes(album._id);
    album.hasUser = false;

    if (userData) {
        album.hasUser = true;
        album.isOwner = album._ownerId === userData._id;
        const userLikes = await totalLikes(album._id, userData._id);
        ctx.render(detailsTemplate(album, totalAlbumLikes, deleteItem, likeAlbum, userLikes));
    } else {
        ctx.render(detailsTemplate(album, totalAlbumLikes, deleteItem, likeAlbum));
    }

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            deleteProduct(albumId);
            ctx.page.redirect('/dashboard')
        }
    }

    async function likeAlbum(e) {
        e.preventDefault();
        likes(album._id);
        ctx.page.redirect(`/details/${albumId}`);
    }
}