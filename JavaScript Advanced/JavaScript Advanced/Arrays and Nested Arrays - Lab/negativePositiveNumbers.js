function negativePositiveNumbers(input) {

    let result = [];

    for (const element of input) {
        if (element >= 0) {
            result.push(element);
        } else {
            result.unshift(element);
        }
    }
    
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);