function reverseAnArrayOfNumbers(count, array) {

    let newArr = [];

    for (let i = 0; i < count; i++) {

        newArr[count - 1 - i] = array[i];

    }

    console.log(newArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);