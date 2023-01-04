function printAndsum(startNum, endNum) {

    let currentNum = " ";
    let sum = 0;
    
    for (let i = startNum; i <= endNum; i++) {

        sum += i;
        currentNum += `${i} `;

    }

    console.log(currentNum);
    console.log(`Sum: ${sum}`);

}

printAndsum(5, 10);
