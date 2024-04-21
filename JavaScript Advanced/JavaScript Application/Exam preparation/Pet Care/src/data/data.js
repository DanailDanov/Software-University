import { del, get, post, put } from "./api.js";

const endpoints = {
   products: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
   create: '/data/pets', 
   getById: '/data/pets/',
};

export async function getAll(){
    return get(endpoints.products)
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


export async function makeDonation(petId){
    return post('/data/donation', {petId});
}

export async function totalDonation(petId){
    return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}

export async function userDonation(petId, userId){
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}