class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }

        let productData = { product, quantity };
        this.products.push(productData);

        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {

        let findProduct = this.products.find(x => x.product === product);

        if (findProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        } else if (minimalQuantity <= findProduct.quantity) {
            return `You have enough from product ${product}.`;
        }



        const diffrence = minimalQuantity - findProduct.quantity;
        findProduct.quantity = minimalQuantity;

        return `You added ${diffrence} more from the ${product} products.`
    }

    sellProduct(product) {
        let findProduct = this.products.find(x => x.product === product);

        if (findProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        findProduct.quantity--;

        const productInfo = { product, quantity: 1 };

        this.sales.push(productInfo);

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        const result = [`You sold ${this.sales.length} products today!`, 'Products in the warehouse:'];

        this.products.forEach((data) => {
            let correctOutput = `${data.product}-${data.quantity} more left`;
            result.push(correctOutput);
        })

        return result.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());






