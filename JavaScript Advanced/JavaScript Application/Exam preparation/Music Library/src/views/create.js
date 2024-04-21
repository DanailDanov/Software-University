import { html } from "../../node_modules/lit-html/lit-html.js";
import { create } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function createPage(ctx) {

    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({ singer, album, imageUrl, release, label, sales }, form) {

        if (singer === '' || album === '' || imageUrl === '' || release === '' || label === '' || sales === '') {
            return alert('All fields are required')
        }
        
        await create({ singer, album, imageUrl, release, label, sales });
        form.reset();

        ctx.page.redirect('/dashboard');
    }
}
