function solve() {

    const addElements = Array.from(document.querySelectorAll('.add-product'));
    document.querySelector('.checkout').addEventListener('click', checkout)

    const products = {
        Bread: 0.80,
        Milk: 1.09,
        Tomatoes: 0.99,
    }

    const textArea = document.querySelector('textarea');
    const listOfProducts = [];
    let textOutput = '';
    let totalPrice = 0;

    for (const line of addElements) {
        line.addEventListener('click', onClick)
    }

    function onClick(event) {
        let nameOfProduct = event.target.parentNode.parentNode.querySelector('.product-title').textContent;
        textOutput = `Added ${nameOfProduct} for ${products[nameOfProduct].toFixed(2)} to the cart.\n`;
        totalPrice += products[nameOfProduct];
        textArea.value = textOutput;

        if (!listOfProducts.includes(nameOfProduct)) {
            listOfProducts.push(nameOfProduct);
        }
    }

    function checkout() {
       textOutput = `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
       textArea.value += textOutput;

       Array.from(document.querySelectorAll('button')).forEach(x => x.disabled === true);
    }
}