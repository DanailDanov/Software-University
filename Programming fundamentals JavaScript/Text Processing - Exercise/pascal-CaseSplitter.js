function pascalCaseSplitter(sentence) {

    let result = sentence[0];
    let lower = sentence.toLowerCase();

    for (let index = 1; index < sentence.length; index++) {
        if (sentence[index] !== lower[index]) {
            result += ', '
        }
        result += sentence[index];
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');