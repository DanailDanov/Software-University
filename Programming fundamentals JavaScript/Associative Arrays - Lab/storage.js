function storage(input) {

let map = new Map();

for (const line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity)
        if (!map.has(product)) {
            map.set(product, quantity);
        }else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity)
        }
}

for (const kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);

