function censoredWords(sentence, word) {

    let result = sentence;

    while (result.includes(word)) {
        result = result.replace(word, '*'.repeat(word.length));
    }
    console.log(result);
}

censoredWords('A small sentence with some words', 'small');