import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../data/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (fruit, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="name" id="name" .value = ${fruit.name} placeholder="Fruit Name" />
            <input type="text" name="imageUrl" id="Fruit-image" .value = ${fruit.imageUrl} placeholder="Fruit Image URL" />
            <textarea id="fruit-description" name="description" .value = ${fruit.description} placeholder="Description" rows="10"
                cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" .value = ${fruit.nutrition} placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const fruitId = ctx.params.id;
    const fruit = await getById(fruitId);

    ctx.render(editTemplate(fruit, createSubmitHandler(onSubmit)));

    async function onSubmit({ name, imageUrl, description, nutrition }, form) {
        if (name === '' || imageUrl === '' || description === '' || nutrition === '') {
            return alert('All fields are required')
        }

        await update(fruitId, { name, imageUrl, description, nutrition });
        form.reset();

        ctx.page.redirect(`/details/${fruitId}`);
    }
}