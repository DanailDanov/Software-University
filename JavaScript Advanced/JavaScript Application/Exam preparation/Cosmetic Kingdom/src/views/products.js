import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllProducts } from "../data/products.js";

const productsTemplate = (products) => html`
<h2>Products</h2>
        ${products.length > 0
        ? html`<section id="dashboard">
            ${products.map(productCard)}
               </section>`
        :html`<h2>No products yet.</h2>`    
        }
`;

const productCard = (product) => html`
<div class="product">
    <img src="${product.imageUrl}" alt="example1" />
    <p class="title">
        ${product.name}
    </p>
    <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
</div>
`;

export async function productsPage(ctx) {
    const products = await getAllProducts();
    ctx.render(productsTemplate(products));
}