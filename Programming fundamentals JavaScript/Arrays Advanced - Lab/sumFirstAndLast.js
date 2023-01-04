function sumFirstAndLast(array) {

    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop(array.length - 1));

    let sum = firstElement + lastElement;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
