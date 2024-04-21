function lowestPricesinCities(data) {

    let result = {};

    for (const elements of data) {
        let [town, product, price] = elements.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price };
        } else if (price < result[product].price) {
            result[product].price = price;
            result[product].town = town
        }
    }

    const entries = Object.entries(result);

    for (const kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1].price} (${kvp[1].town})`);
    }
}

lowestPricesinCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    ' Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
);