import { del, get, post, put } from "./api.js";

const endpoints = {
   products: '/data/shoes?sortBy=_createdOn%20desc',
   addProduct: '/data/shoes', 
   getById: '/data/shoes/',
};

export async function getAll(){
    return get(endpoints.products)
}

export async function getById(id){
    return get(endpoints.getById + id)
}

export async function create(data){
    return post(endpoints.addProduct , data)
}

export async function update(id, data){
    return put(endpoints.getById + id, data)
}


export async function deleteProduct(id){
    del(endpoints.getById + id)
}

export async function searchProduct(query){
  return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)
}