function diagonalSums(input) {

    let main = 0;
    let secondary = 0;

    for (let i = 0; i < input.length; i++) {

        main += input[i][i];
        secondary += input[i][input.length - i - 1];

    }

    console.log(main + ' ' + secondary);
}

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);