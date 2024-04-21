function pieceOfPie(array, firstString, secondString) {

    const startIndex = array.indexOf(firstString);
    const endIndex = array.indexOf(secondString);

    const result = array.slice(startIndex, endIndex + 1);

    return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');