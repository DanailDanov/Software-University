import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateOffer } from "../data/books.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (book, onEdit) => html`
<section id="edit-page" class="edit">
            <form @submit=${onEdit} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value="${book.title}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                              .value=${book.description} id="description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image"  .value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>

`;

export async function editPage(ctx) {

  const id = ctx.params.id;

  const book = await getById(id);

  ctx.render(editTemplate(book, createSubmitHandler(onEdit)))

  async function onEdit({
    title,
    description,
    imageUrl,
    type
  }) {
    if ([title,
      description,
      imageUrl,
      type

    ].some(f => f == '')) {
      return alert('all fileds Are required');
    }

    await updateOffer(id, {
      title,
      description,
      imageUrl,
      type    
    });

    ctx.page.redirect(`/catalog/${id}`);

  }
}