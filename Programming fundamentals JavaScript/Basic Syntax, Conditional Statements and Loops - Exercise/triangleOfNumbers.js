function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {

        let row = '';
        
        for (let x = 1; x <= i; x++) {
            row += `${i} `
        }
        console.log(row);
    }

}

triangleOfNumbers(3);
