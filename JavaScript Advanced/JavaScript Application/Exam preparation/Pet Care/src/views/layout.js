import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
<header>
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
            ${userData ? html`
            <!--Users and Guest-->
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <!--Only Users-->
            <li><a href="/create">Create Postcard</a></li>
            <li><a href="/logout">Logout</a></li>
            `: html`
            <!--Users and Guest-->
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <!--Only Guest-->
            <li><a href="login">Login</a></li>
            <li><a href="/register">Register</a></li>`}
        </ul>
    </nav>
</header>
<main id="content">
    ${content}
</main>
<footer>Pet Care 2022©</footer>
`;