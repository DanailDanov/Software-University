import { html } from "../../node_modules/lit-html/lit-html.js";
import { getProductById, updateProduct } from "../data/products.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (product, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="name" .value=${product.name} id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" .value=${product.imageUrl}
                placeholder="Product Image" />
            <input type="text" name="category" id="product-category" .value=${product.category}
                placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description"
                .value=${product.description} rows="5" cols="50"></textarea>

            <input type="text" name="price" id="product-price" .value=${product.price} placeholder="Price" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {

    const productId = ctx.params.id;
    const product = await getProductById(productId);

    ctx.render(editTemplate(product, createSubmitHandler(onSubmit)));

    async function onSubmit({
        name,
        imageUrl,
        category,
        description,
        price
    }, form) {
        if ([name,
            imageUrl,
            category,
            description,
            price].some(f => f == '')) {
            return alert('all fileds Are required');
        }

        await updateProduct(productId, {
            name,
            imageUrl,
            category,
            description,
            price
        });

        form.reset();
        ctx.page.redirect(`/details/${productId}`);
    }
}