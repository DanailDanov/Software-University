import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getById } from "../data/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, deleteItem) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${product.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${product.brand}</span></p>
            <p>
                Model: <span id="details-model">${product.model}</span>
            </p>
            <p>Release date: <span id="details-release">${product.release}</span></p>
            <p>Designer: <span id="details-designer">${product.designer}</span></p>
            <p>Value: <span id="details-value">${product.value}</span></p>
        </div>
        ${product.isOwner ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteItem}>Delete</a>
        </div>
        `: null}
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const productId = ctx.params.id;
    const product = await getById(productId);
    const userData = getUserData();

    if (userData) {
        product.isOwner = product._ownerId == userData._id;
    }

    ctx.render(detailsTemplate(product, deleteItem));

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            deleteProduct(productId);
            ctx.page.redirect('/dashboard')
        }
    }
}