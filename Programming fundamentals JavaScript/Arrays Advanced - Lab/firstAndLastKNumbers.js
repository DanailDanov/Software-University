function firstAndLastKNumbers(array) {

    let kNum = array.shift();
    let first = array.slice(0, kNum);
    let second = array.slice(array.length - kNum);

    console.log(first.join(' '));
    console.log(second.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);