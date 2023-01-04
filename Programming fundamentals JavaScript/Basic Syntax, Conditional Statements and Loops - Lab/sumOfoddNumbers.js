function sumOfoddNumbers(num) {

    let oddNumbers = 1;
    let sum = 0;

    for (let i = 0; i < num; i++) {
        
        console.log(oddNumbers);

        sum += oddNumbers;
        oddNumbers += 2;
        
    }
    console.log(`Sum: ${sum}`);
}

sumOfoddNumbers(5);

