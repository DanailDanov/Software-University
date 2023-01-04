function wordTracker(input) {

    let foundWord = {};

    const wordSearching = input.shift().split(" ");
    let wordOne = wordSearching[0];
    let wordTwo = wordSearching[1];

    let counterForThis = 0;
    let counterForSentence = 0;

    for (const line of input) {

        if (line === wordOne) {
            counterForThis++;
        } else if (line === wordTwo) {
            counterForSentence++;
        }
    }

    foundWord[wordOne] = counterForThis;
    foundWord[wordTwo] = counterForSentence;


    let sorted = Object.entries(foundWord);
    sorted.sort((a, b) => b[1] - a[1]);

    for (const line of sorted) {
        console.log(`${line[0]} - ${line[1]}`);
    }

}

wordTracker(['is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);