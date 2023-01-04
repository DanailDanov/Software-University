function sorting(array) {

    let newArr = [];

    let sortedArray = array.sort((a, b) => b - a);

    for (let i = 0; i < sortedArray.length; i++) {
        let firstElement = sortedArray.shift();
        let lastElement = sortedArray.pop();
        newArr.push(firstElement);
        newArr.push(lastElement);


    }

    let firstElement = sortedArray.shift();
    let lastElement = sortedArray.pop();
    newArr.push(firstElement);
    newArr.push(lastElement);



    console.log(newArr.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);





