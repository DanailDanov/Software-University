function maxNumber(arr) {

    let newArray = [];
   
    for (let i = 0; i < arr.length; i++) {

        let isBigger = true
        let currentNumber = arr[i];

        for (let k = i + 1; k < arr.length; k++) {
            if (currentNumber <= arr[k]) {
                isBigger = false;
            }

        }

        if (isBigger) {
            newArray.push(arr[i])
        }

    }

    console.log(newArray.join(' '));

}

maxNumber([14, 24, 3, 19, 15, 17]);
