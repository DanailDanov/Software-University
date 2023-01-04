function sumDigits(num) {

    let numTostr = num.toString();
    let sum = 0;

    for (let i = 0; i < numTostr.length; i++) {
        let parses = Number(numTostr[i]);
        sum += parses;

    }

    console.log(sum);

}

sumDigits(245678);