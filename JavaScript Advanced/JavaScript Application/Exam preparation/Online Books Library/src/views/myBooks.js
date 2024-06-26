import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../util.js";
import { myOwnBooks } from "../data/books.js";


const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length > 0 
        ? html`<ul class="my-books-list">
                     ${books.map(myBooks)}
               </ul>`
        : html`<p class="no-books">No books in database!</p>`}
</section>
`;

const myBooks = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/catalog/${book._id}">Details</a>
    </li>
`;

export async function myBooksPage(ctx) {

   const userData = getUserData();
   const books = await myOwnBooks(userData._id);

   ctx.render(myBooksTemplate(books));

}
