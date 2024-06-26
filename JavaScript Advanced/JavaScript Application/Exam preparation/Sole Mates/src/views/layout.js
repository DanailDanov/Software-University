import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
<header>
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    <nav>
        <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
        </div>
        ${userData ? html`
        <!-- Logged-in users -->
        <div class="user">
            <a href="/add">Add Pair</a>
            <a href="/logout">Logout</a>
        </div>
        `: html`
        <!-- Guest users -->
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        `}
    </nav>
</header>
<main>
    ${content}
</main>
`;