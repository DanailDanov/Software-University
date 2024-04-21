import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getById } from "../data/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (fruit, deleteItem) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>
                ${fruit.description}
                </p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">
                ${fruit.nutrition}
                </p>
            </div>
            ${fruit.isOwner ? html`
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click = ${deleteItem}>Delete</a>
            </div>
            `: null}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const fruitId = ctx.params.id;
    const fruit = await getById(fruitId);
    const userData = getUserData();

    if (userData) {
        fruit.isOwner = fruit._ownerId == userData._id;
    }

    ctx.render(detailsTemplate(fruit, deleteItem));

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            deleteProduct(fruitId);
            ctx.page.redirect('/dashboard')
        }
    }
}