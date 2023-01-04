function revealWords(words, sentence) {

    let wordAsArray = words.split(', ');

    let sentenceAsArray = sentence.split(' ');
    let result = sentence

    for (const word of wordAsArray) {
        for (const wordInsentence of sentenceAsArray) {
            if (wordInsentence.includes('*') && wordInsentence.length === word.length) {
                result = result.replace(wordInsentence, word);
            }
        }
    }

    console.log(result);

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');