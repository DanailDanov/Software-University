function processOddNumbers(array) {

    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(array[i]);
        }
    }

    let reversed = newArr.map(x => x * 2).reverse();
    console.log(reversed.join(' '));

}

processOddNumbers([3, 0, 10, 4, 7, 3]);