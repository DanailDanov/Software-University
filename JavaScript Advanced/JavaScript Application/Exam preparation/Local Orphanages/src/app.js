import page  from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
// import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myPostPage } from './views/myPost.js';

// TODO
const root = document.getElementById('box');

page(decorateContext);
// page('index.html', '/');
page('/', dashboardPage)
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myPost', myPostPage);

page.start();

function decorateContext(ctx, next) {
 ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);    
}

function logoutAction (ctx) {
    logout();
    ctx.page.redirect('/')
}