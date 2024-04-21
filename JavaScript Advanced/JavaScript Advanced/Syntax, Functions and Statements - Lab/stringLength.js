function stringLength(stringOne, stringTwo, StringThree) {

    const sumOfLength = stringOne.length + stringTwo.length + StringThree.length;
    const average = sumOfLength / 3;

    console.log(sumOfLength);
    console.log(Math.floor(average));
}

stringLength('chocolate', 'ice cream', 'cake');