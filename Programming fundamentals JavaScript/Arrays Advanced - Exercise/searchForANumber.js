function searchForANumber(arr1, arr2) {

    let numToTake = arr2[0];
    let numToDelete = arr2[1];
    let searchingNum = arr2[2];

    let newArr = arr1.slice(0, numToTake);
        newArr.splice(0, numToDelete);

    let counter = 0;

    for (const el of newArr) {
        if (el === searchingNum) {
            counter++;
        }
    }

    console.log(`Number ${searchingNum} occurs ${counter} times.`);
    
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);