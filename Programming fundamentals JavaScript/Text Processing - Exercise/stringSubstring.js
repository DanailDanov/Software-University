function stringSubstring(word, sentence) {

    let smallLetterSentence = sentence.toLowerCase().split(' ');
    let wordWithSmallLetter = word.toLowerCase();


    for (const element of smallLetterSentence) {
        if (wordWithSmallLetter === element) {
            return console.log(wordWithSmallLetter);
        }
    }

    console.log(`${wordWithSmallLetter} not found!`);
}

stringSubstring('javaScript',
    'JavaScript is the best programming language');