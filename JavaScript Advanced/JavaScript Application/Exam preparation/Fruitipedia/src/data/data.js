import { del, get, post, put } from "./api.js";

const endpoints = {
   fruits: '/data/fruits?sortBy=_createdOn%20desc',
   create: '/data/fruits', 
   getById: '/data/fruits/',
};

export async function getAll(){
    return get(endpoints.fruits)
}

export async function getById(id){
    return get(endpoints.getById + id)
}

export async function create(data){
    return post(endpoints.create , data)
}

export async function update(id, data){
    return put(endpoints.getById + id, data)
}


export async function deleteProduct(id){
    del(endpoints.getById + id)
}

//BONUS
export async function searchFruits(query){
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`)
  }