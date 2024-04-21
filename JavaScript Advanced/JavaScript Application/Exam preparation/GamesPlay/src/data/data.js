import { del, get, post, put } from "./api.js";

const endpoints = {
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    getById: '/data/games/',
};

export async function getAll() {
    return get(endpoints.games)
}

export async function getById(id) {
    return get(endpoints.getById + id)
}

export async function create(data) {
    return post(endpoints.create, data)
}

export async function update(id, data) {
    return put(endpoints.getById + id, data)
}


export async function deleteProduct(id) {
    del(endpoints.getById + id)
}

//Three games
export async function threeGames() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}