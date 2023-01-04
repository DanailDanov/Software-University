function magicSum(array, number) {



    let newArray = [];
    let validPairs = "";

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] + array[j] === number) {
                validPairs = `${array[i]} ${array[j]}`;
                newArray.push(validPairs);
            }
            
        }
    }

    console.log(newArray.join("\n"));
}

magicSum([1, 2, 3, 4, 5, 6], 6);