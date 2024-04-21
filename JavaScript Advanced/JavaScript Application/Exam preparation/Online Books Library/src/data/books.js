import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/books?sortBy=_createdOn%20desc',
    byId: '/data/books/',
    create: '/data/books',
    likes: '/data/likes',
    myBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    bookLikes: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    userLike: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllOffers() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function createOffer(data) {
    return post(endpoints.create, data);
}

export async function updateOffer(id, data) {
    return put(endpoints.byId + id, data);
}

export async function deleteOffer(id) {
    return del(endpoints.byId + id);
}

export async function myOwnBooks(userId) {
    return get(endpoints.myBooks(userId));
}

export async function addLike(bookId) {
    return post(endpoints.likes, {bookId});
}

export async function totalBookLikes(bookId) {
    return get(endpoints.bookLikes(bookId));
}
//get like for a book from specific user
export async function userLikes(bookId, userId) {
    return get(endpoints.userLike(bookId, userId));
}
