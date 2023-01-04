function condenseArrayToNumber(array) {

    while (array.length > 1) {
        let condenseArray = [];

        for (let i = 0; i < array.length - 1; i++) {
            condenseArray[i] =  Number(array[i]) + Number(array[i + 1]);

        }
        array = condenseArray;
    }

    console.log(array[0]);

}

condenseArrayToNumber([2,10,3]);

