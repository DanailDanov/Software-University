import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (product, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="brand" id="shoe-brand" .value=${product.brand} placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" .value=${product.model} placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" .value=${product.imageUrl} placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" .value=${product.release} placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" .value=${product.designer} placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" .value=${product.value} placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const productId = ctx.params.id;
    const product = await getById(productId);

    ctx.render(editTemplate(product, createSubmitHandler(onSubmit)));

    async function onSubmit({ brand, model, imageUrl, release, designer, value }, form) {
        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required')
        }

        await update(productId, { brand, model, imageUrl, release, designer, value });
        form.reset();

        ctx.page.redirect(`/details/${productId}`);
    }
}