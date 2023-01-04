function triplesOfLatinLetters(num) {

    for (let i = 0; i < num; i++) {
        let letter = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {
            let secondLetter = String.fromCharCode(97 + j);
            for (let k = 0; k < num; k++) {
                let thirdLetter = String.fromCharCode(97 + k);
                console.log(`${letter}${secondLetter}${thirdLetter}`);
            }
        }
    }

}

triplesOfLatinLetters('3');