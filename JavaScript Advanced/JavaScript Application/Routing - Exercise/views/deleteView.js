import { del } from '../api.js';
import page from '../node_modules/page/page.mjs';

export function onClick(e) {
    del(`/data/catalog/${e.target.id}`);
    page.redirect('/');
}