import { html } from "../../node_modules/lit-html/lit-html.js";
import { addBuys, deleteproduct, getProductById, totalBoughtCount, userBoughtCount } from "../data/products.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, onDelete, onBuys, buysCounter, userBuy) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${buysCounter}</span> times.</h4>
                <span>
                    ${product.description}
                </span>
            </div>
        </div>
        <div id="action-buttons">
            ${product.isOwner 
                ? html` <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
                : html`${userBuy == 0 
                ? html`<a href="javascript:void(0)" id="buy-btn" @click = ${onBuys}>Buy</a>` 
                : null}`}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;
    const product = await getProductById(id);
    const userData = getUserData();
    const buysCounter = await totalBoughtCount(id);

    if (userData) {
        const userBuy = await userBoughtCount(id, userData._id);
        product.isOwner = product._ownerId == userData._id;
        ctx.render(detailsTemplate(product, onDelete, onBuys, buysCounter, userBuy));
    } else {
        ctx.render(detailsTemplate(product, onDelete, onBuys, buysCounter));
    }


    async function onDelete() {

        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            await deleteproduct(id);
            ctx.page.redirect('/products');
        }
    }

    async function onBuys(e) { 
        await addBuys(product._id);
        ctx.page.redirect(`/details/${id}`);
    }
}