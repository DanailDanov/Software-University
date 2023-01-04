function integerAndFloat(firsNum, secondNum, thirdNum) {

    let sum = firsNum + secondNum + thirdNum;
    let type = '';

    if (Number.isInteger(sum)) {
        type = 'Integer';
    } else {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}


integerAndFloat(9, 100, 1.1); 
