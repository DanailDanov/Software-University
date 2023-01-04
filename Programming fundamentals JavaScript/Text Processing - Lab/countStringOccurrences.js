function countStringOccurrences(sentence, searchedWord) {


    let array = sentence.split(' ');
    let counter = 0;

    for (const word of array) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);

}

countStringOccurrences('This is a word and it also is a sentence', 'is');