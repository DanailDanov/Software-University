import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (album, onSubmit) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit = ${onSubmit}>
            <input type="text" name="singer" id="album-singer" .value = ${album.singer} placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" .value = ${album.album} placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" .value = ${album.imageUrl} placeholder="Image url" />
            <input type="text" name="release" id="album-release" .value = ${album.release} placeholder="Release date" />
            <input type="text" name="label" id="album-label" .value = ${album.label} placeholder="Label" />
            <input type="text" name="sales" id="album-sales" .value = ${album.sales} placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);

    ctx.render(editTemplate(album, createSubmitHandler(onSubmit)));

    async function onSubmit({ singer, album, imageUrl, release, label, sales }, form) {
        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            return alert('All fields are required')
        }

        await update(albumId, {  singer, album, imageUrl, release, label, sales });
        form.reset();

        ctx.page.redirect(`/details/${albumId}`);
    }
}