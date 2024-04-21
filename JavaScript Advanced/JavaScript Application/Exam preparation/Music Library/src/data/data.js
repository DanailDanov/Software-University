import { del, get, post, put } from "./api.js";

const endpoints = {
    songs: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    getById: '/data/albums/',
};

export async function getAll() {
    return get(endpoints.songs)
}

export async function getById(id) {
    return get(endpoints.getById + id)
}

export async function create(data) {
    return post(endpoints.create, data);
}

export async function update(id, data) {
    return put(endpoints.getById + id, data)
}

export async function deleteProduct(id) {
    del(endpoints.getById + id)
}

            //BONUS 
export async function likes(albumId) {
    return post('/data/likes', {albumId})
}

export async function totalLikes(albumId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function ownLikes(albumId, userId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}