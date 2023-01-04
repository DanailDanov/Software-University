function repeatString(string, repetition) {


    function repeated() {

        let repeatedString = '';
        for (let i = 1; i <= repetition; i++) {
            repeatedString += string;
        }

        return repeatedString;

    }

    let print = repeated(string, repetition);
    console.log(print);

}

repeatString("abc", 3);


