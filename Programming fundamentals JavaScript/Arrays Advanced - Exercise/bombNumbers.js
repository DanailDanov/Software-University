function bombNumbers(array, bombNum) {

    let sum = 0;

    let bomb = bombNum[0];
    let numToRemove = bombNum[1];
    let indexOfBombNumber = array.indexOf(bomb)
    while (indexOfBombNumber !== -1) {

        let start = Math.max(0, indexOfBombNumber - numToRemove);
        let explosion = numToRemove * 2 + 1;
        array.splice(start, explosion);
        indexOfBombNumber = array.indexOf(bomb);
    }

    sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);




 
