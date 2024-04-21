import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getById, makeDonation, totalDonation, userDonation } from "../data/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (pet, petDonationCount, deleteItem, addDonation, userDonationCount) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight:${pet.weight}</h4>
                <h4 class="donation">Donation: ${petDonationCount * 100}$</h4>
            </div>
            ${pet.hasUser ? html`
            <div class="actionBtn">
                ${pet.isOwner ? html`
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click=${deleteItem}>Delete</a>
                `: html`${!pet.isOwner && userDonationCount === 0 ? html`<a href="/vavascript:void(0)" class="donate"
                    @click=${addDonation}>Donate</a>` : null}`}
            </div> `: null}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const petId = ctx.params.id;
    const pet = await getById(petId);
    const userData = getUserData();
    const petDonationCount = await totalDonation(pet._id);
    pet.hasUser = false;

    if (userData) {
        pet.hasUser = true;
        pet.isOwner = pet._ownerId == userData._id;
        const userDonationCount = await userDonation(pet._id, userData._id);
        ctx.render(detailsTemplate(pet, petDonationCount, deleteItem, addDonation, userDonationCount));
    } else {
        ctx.render(detailsTemplate(pet, petDonationCount, deleteItem, addDonation));
    }



    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            deleteProduct(petId);
            ctx.page.redirect('/dashboard')
        }
    }

    async function addDonation(e) {
        e.preventDefault();
        makeDonation(pet._id);
        ctx.page.redirect(`/details/${pet._id}`);
    }
}