function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i].toString();
        let reversedString = currentNum.split('').reverse().join('');

        if (currentNum === reversedString) {
            console.log('true');
        } else {
            console.log('false');
        }


    }
}

palindromeIntegers([123, 323, 421, 121]);
