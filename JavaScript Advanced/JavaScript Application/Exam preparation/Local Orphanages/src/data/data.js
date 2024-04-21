import { del, get, post, put } from "./api.js";

const endpoints = {
    products: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    getById: '/data/posts/',
};

export async function getAll() {
    return get(endpoints.products)
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

export async function myPost(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

//BONUS

export async function makeDonation(postId) {
    return post('/data/donations', { postId });
}

export async function totalDonationCount(postId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export async function ownDonation(postId, userId) {
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}



