import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getById, makeDonation, ownDonation, totalDonationCount } from "../data/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, productDonation, deleteItem, addDonaiton, userLike) => html`
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${product.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${product.title}</h2>
                        <p class="post-description">Description: ${product.description}</p>
                        <p class="post-address">Address: ${product.address}</p>
                        <p class="post-number">Phone number: ${product.phone}</p>
                        <p class="donate-Item">Donate Materials: ${productDonation}</p>

                        ${product.hasUser ? html`
                        <div class="btns">
                            ${product.isOwner ? html`
                            <a href="/edit/${product._id}" class="edit-btn btn">Edit</a>
                            <a href="javascript:void(0)" class="delete-btn btn" @click = ${deleteItem}>Delete</a>
                            `:html`${!product.isOwner && userLike === 0 ? html`<a href="javascript:void(0)" class="donate-btn btn" @click = ${addDonaiton}>Donate</a>`:null}`}
                        </div>
                        `: null}                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {

    const productId = ctx.params.id;
    const product = await getById(productId);
    const userData = getUserData();
    const productDonation = await totalDonationCount(product._id);
    product.hasUser = false;

    if (userData) {
        product.hasUser = true;
        product.isOwner = product._ownerId == userData._id;
        const userLike = await ownDonation(product._id, userData._id)
        ctx.render(detailsTemplate(product, productDonation, deleteItem, addDonation, userLike));
    } else {
        ctx.render(detailsTemplate(product, productDonation, deleteItem, addDonation));
    }

  

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            deleteProduct(productId);
            ctx.page.redirect('/dashboard')
        }
    }

    async function addDonation(e) {
        e.preventDefault();
        makeDonation(product._id);
        ctx.page.redirect(`/details/${product._id}`);
    }
}