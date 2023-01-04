function listOfProducts(array) {

    let sortedProduct = array.sort();

    for (let i = 0; i < sortedProduct.length; i++) {
        console.log(`${i + 1}.${sortedProduct[i]}`);
    }


}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);