function distinctArray(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }

    console.log(newArr.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);