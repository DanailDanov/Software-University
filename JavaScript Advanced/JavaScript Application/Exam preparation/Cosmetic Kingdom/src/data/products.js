import { get, post, put, del } from './api.js';

const endpoints = {
    catalog: '/data/products?sortBy=_createdOn%20desc',
    byId: '/data/products/',
    create: '/data/products',
    addBuys: '/data/bought',
    // totalBought: (id) => `/data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`,
    // userBought: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllProducts() {
    return get(endpoints.catalog);
}

export async function getProductById(id) {
    return get(endpoints.byId + id);
}

export async function createProduct(data) {
    return post(endpoints.create, data);
}

export async function updateProduct(id, data) {
    return put(endpoints.byId + id, data);
}

export async function deleteproduct(id) {
    return del(endpoints.byId + id);
}

export async function addBuys(id) {
    return post(endpoints.addBuys, {id});
}

export async function totalBoughtCount(id) {
    return get(`data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function userBoughtCount(productId, userId) {
    return get(`data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}